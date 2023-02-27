<?php

namespace App\Http\Controllers\v1;

use App\Http\Requests\StoreMainProductRequest;
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
        $recipes = Product::filter()->paginate($limit);

        return $this->fractal
            ->paginate($recipes, new ProductTransformer())
            ->get();
    }
}
