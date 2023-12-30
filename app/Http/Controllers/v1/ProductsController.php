<?php

namespace App\Http\Controllers\v1;

use App\Enum\RecipeStatusEnum;
use App\Enum\UserRoleEnum;
use App\Http\Requests\StoreProductRequest;
use App\Models\Product;
use App\Transformers\ProductTransformer;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Arr;

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
        $product = Product::create($request->validationData());
        return $this->fractal
            ->item($product, new ProductTransformer())
            ->get();
    }

    public function update(Request $request, Product $product)
    {
        if ($product->update($request->all())) {

            $userRole = $request->user()->role;
            if ($userRole == UserRoleEnum::USER) {
                $product->update(['status' => RecipeStatusEnum::PENDING]);
            }
            return $this->fractal
                ->item($product, new ProductTransformer())
                ->get();
        }

        return $this->respondUnprocessable();

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
