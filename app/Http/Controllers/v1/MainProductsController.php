<?php

namespace App\Http\Controllers\v1;

use App\Http\Requests\StoreMainProductRequest;
use App\Models\MainProduct;
use App\Models\Product;
use App\Transformers\MainProductTransformer;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Arr;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Log;

class MainProductsController extends ApiController
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        $limit = Arr::get($request->all(), 'limit', 15);
        $mainProducts = MainProduct::filter()->paginate($limit);

        return $this->fractal
            ->paginate($mainProducts, new MainProductTransformer())
            ->get();
    }


    /**
     * Store a newly created resource in storage.
     *
     * @param StoreMainProductRequest $request
     * @return Response
     */
    public function store(StoreMainProductRequest $request)
    {
        $mainProduct = MainProduct::create($request->validationData());
        return $this->updateProducts($mainProduct, $request->get('products'));
    }

    /**
     * Display the specified resource.
     *
     * @param MainProduct $mainProduct
     * @return Response
     */
    public function show(MainProduct $mainProduct)
    {
        return $this->fractal
            ->item($mainProduct, new MainProductTransformer())
            ->get();
    }


    /**
     * Update the specified resource in storage.
     *
     * @param Request $request
     * @param MainProduct $mainProduct
     * @return Response
     */
    public function update(StoreMainProductRequest $request, MainProduct $mainProduct): Response
    {
        DB::beginTransaction();
        try {
            $mainProduct->update($request->all());
            $this->unplugProducts($mainProduct);
            $result = $this->updateProducts($mainProduct, $request->get('products'));
        } catch (\Exception $e) {
            Log::error($e->getMessage());
            DB::rollBack();
            return $this->respondUnprocessable();
        }
        DB::commit();
        return $result;
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param MainProduct $mainProduct
     * @return Response
     */
    public function destroy(MainProduct $mainProduct): Response
    {
        DB::beginTransaction();
        try {
            $this->unplugProducts($mainProduct);
            $mainProduct->delete();
        } catch (\Exception $e) {
            Log::error($e->getMessage());
            DB::rollBack();
            return $this->respondUnprocessable();
        }
        DB::commit();
        return $this->respondOK();
    }

    /**
     * @param MainProduct $mainProduct
     * @param $data
     * @return Response|mixed
     */
    protected function updateProducts(MainProduct $mainProduct, $data): mixed
    {
        try {
            $products = Product::whereIn('id', array_pluck($data, 'id'));
            foreach ($products->get() as $item) {
                $productData = array_first(array_filter($data, function ($element) use ($item) {
                    return $element['id'] == $item->id;
                }));
                $item->update([
                    'main_product_id' => $mainProduct->id,
                    'order' => $productData['order']
                ]);
            }
            return $this->fractal
                ->item($mainProduct, new MainProductTransformer())
                ->get();
        } catch (\Exception $e) {
            Log::error($e->getMessage());
            return $this->respondUnprocessable();
        }
    }

    protected function unplugProducts(MainProduct $mainProduct)
    {
        foreach ($mainProduct->products as $product) {
            $product->update([
                'main_product_id' => null,
                'order' => null
            ]);
        }
    }
}
