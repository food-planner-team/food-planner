<?php

namespace App\Http\Controllers\v1;

use App\Enum\ProductStatusEnum;
use App\Enum\RecipeStatusEnum;
use App\Enum\UserRoleEnum;
use App\Factories\ImageFactory;
use App\Http\Requests\StoreProductRequest;
use App\Models\Product;
use App\Transformers\ProductTransformer;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Arr;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Log;

class ProductsController extends ApiController
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        $limit = Arr::get($request->all(), 'limit', 15);
        $products = Product::filter()->paginate($limit);

        return $this->fractal
            ->paginate($products, new ProductTransformer())
            ->get();
    }

    public function store(StoreProductRequest $request)
    {
        DB::beginTransaction();
        try {
            $product = $request->user()->products()->create($request->validationData());
            if ($request->has('image')) {
                $image = new ImageFactory('images/products/', $request->file('image'), $product, 'public');
                $image->create();
            }
            DB::commit();
            return $this->fractal
                ->parseIncludes("image")
                ->item($product->fresh(), new ProductTransformer())
                ->get();
        } catch (\Exception $e) {
            DB::rollBack();
            Log::error('Error in file: ' . $e->getFile() . ', line: ' . $e->getLine() . '\nMessage: ' . $e->getMessage());
            return $this->respondUnprocessable($e->getMessage());
        }
    }

    public function update(Request $request, Product $product)
    {
        DB::beginTransaction();
        try {
            $product->update($request->all());
            if ($request->user()->role == UserRoleEnum::USER) {
                $product->update(['status' => ProductStatusEnum::PENDING]);
            }
            if ($request->file("image")) {
                $image = new ImageFactory('images/products/', $request->file('image'), $product, 'public');
                $image->update($product->image);
            }
            DB::commit();
            return $this->fractal
                ->parseIncludes("image")
                ->item($product, new ProductTransformer())
                ->get();
        } catch (\Exception $e) {
            DB::rollBack();
            Log::error('Error in file: ' . $e->getFile() . ', line: ' . $e->getLine() . '\nMessage: ' . $e->getMessage());
            return $this->respondUnprocessable($e->getMessage());
        }
    }

    public function show(Product $product)
    {
        return $this->fractal
            ->item($product, new ProductTransformer())
            ->get();
    }

    public function delete(Product $product)
    {
        $product->delete();
        return $this->respondOK();
    }
}
