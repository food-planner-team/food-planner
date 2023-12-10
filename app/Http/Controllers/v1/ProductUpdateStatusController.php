<?php

namespace App\Http\Controllers\v1;

use App\Http\Requests\UpdateStatusProductRequest;
use App\Models\Product;
use App\Transformers\ProductTransformer;
use Illuminate\Http\Request;
use Illuminate\Http\Response;

class ProductUpdateStatusController extends ApiController
{
    /**
     * Display a listing of the resource.
     *
     * @return Response
     */
    public function __invoke(UpdateStatusProductRequest $request, Product $product)
    {
        $product->update(['status' => $request->get("status")]);

        return $this->fractal
            ->item($product, new ProductTransformer())
            ->get();
    }
}
