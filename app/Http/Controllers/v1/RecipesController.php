<?php

namespace App\Http\Controllers\v1;

use App\Factories\ImageFactory;
use App\Http\Requests\StoreRecipeRequest;
use App\Models\Recipe;
use App\Transformers\ImageTransformer;
use App\Transformers\RecipeTransformer;
use Illuminate\Http\Request;
use Illuminate\Support\Arr;

class RecipesController extends ApiController
{
    /**
     * Display a listing of the resource.
     *
     */
    public function index(Request $request)
    {

        $limit = Arr::get($request->all(), 'limit', 12);
        $recipes = Recipe::filter()->paginate($limit);

        return $this->fractal
            ->paginate($recipes, new RecipeTransformer())
            ->get();

    }

    /**
     * Store a newly created resource in storage.
     *
     * @param \Illuminate\Http\Request $request
     * @return \Illuminate\Http\Response
     */
    public function store(StoreRecipeRequest $request)
    {
        $recipe = $request->user()->recipes()->create($request->validationData());
//        $recipe = Recipe::create($request->validationData());
        if ($request->has('image')){
            $image = new ImageFactory('images/recipes/', $request->file('image'),$recipe,'public');
            $image->create();
        }
        if ($request->has('products')){
            $products = $request->get('products');
            foreach ($products as $product) {
                $recipe->recipeItems()->create([
                    'product_id' => $product['product_id'],
                    'quantity' => $product['quantity'],
                    'optional' => $product['optional'],
                ]);
            }
        }

        if ($recipe) {
            return $this->fractal
                ->parseIncludes("recipeItems.product")
                ->item($recipe, new RecipeTransformer())
                ->get();
        }

        return $this->respondUnprocessable();
    }

    /**
     * Display the specified resource.
     *
     * @param \App\Models\Recipe $recipe
     * @return \Illuminate\Http\Response
     */
    public function show(Recipe $recipe)
    {
        return $this->fractal
            ->item($recipe, new RecipeTransformer())
            ->get();
    }


    /**
     * Update the specified resource in storage.
     *
     * @param \Illuminate\Http\Request $request
     * @param \App\Models\Recipe $recipe
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Recipe $recipe)
    {
        if ($recipe->update($request->all())) {

            return $this->fractal
                ->item($recipe, new RecipeTransformer())
                ->get();
        }

        return $this->respondUnprocessable();
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param \App\Models\Recipe $recipe
     * @return \Illuminate\Http\Response
     */
    public function destroy(Recipe $recipe)
    {
        if ($recipe->delete()) {
            return $this->respondOK();
        }

        return $this->respondUnprocessable();
    }
}
