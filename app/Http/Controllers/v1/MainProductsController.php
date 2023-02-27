<?php

namespace App\Http\Controllers\v1;

use App\Http\Requests\StoreMainProductRequest;
use App\Models\MainProduct;
use App\Models\Product;
use App\Transformers\MainProductTransformer;
use App\Transformers\ProductTransformer;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Arr;

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
        $data = $request->get('products');
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
        if ($mainProduct) {
            return $this->fractal
                ->item($mainProduct, new MainProductTransformer())
                ->get();
        }

        return $this->respondUnprocessable();
    }

    /**
     * Display the specified resource.
     *
     * @param \App\Models\Product $product
     * @return \Illuminate\Http\Response
     */
    public function show(Product $product)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param \App\Models\Product $product
     * @return \Illuminate\Http\Response
     */
    public function edit(Product $product)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param \Illuminate\Http\Request $request
     * @param \App\Models\Product $product
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Product $product)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param \App\Models\Product $product
     * @return \Illuminate\Http\Response
     */
    public function destroy(Product $product)
    {
        //
    }
}
