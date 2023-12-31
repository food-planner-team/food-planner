<?php

namespace App\Http\Controllers\v1;

use App\Enum\RecipeStatusEnum;
use App\Enum\UserRoleEnum;
use App\Factories\ImageFactory;
use App\Http\Requests\StoreRecipeRequest;
use App\Models\Recipe;
use App\Transformers\ImageTransformer;
use App\Transformers\RecipeTransformer;
use Illuminate\Http\Request;
use Illuminate\Support\Arr;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Log;

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

    /**y
     * @param \Illuminate\Http\Request $request
     * @return \Illuminate\Http\Response
     */
    public function store(StoreRecipeRequest $request)
    {
        DB::beginTransaction();
        try {
            $recipe = $request->user()->recipes()->create($request->validationData());
            if ($request->has('image')) {
                $image = new ImageFactory('images/recipes/', $request->file('image'), $recipe, 'public');
                $image->create();
            }
            if ($request->has('products')) {
                $products = json_decode($request->products, true);
                foreach ($products as $product) {
                    $recipe->recipeItems()->create([
                        'product_id' => $product['product_id'],
                        'quantity' => $product['quantity'],
                        'optional' => boolval($product['optional']),
                    ]);
                }
            }

            DB::commit();
            return $this->fractal
                ->parseIncludes("recipeItems.product.image,image")
                ->item($recipe->fresh(), new RecipeTransformer())
                ->get();
        } catch (\Exception $e) {
            DB::rollBack();
            Log::error('Error in file: ' . $e->getFile() . ', line: ' . $e->getLine() . '\nMessage: ' . $e->getMessage());
            return $this->respondUnprocessable();
        }
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
        DB::beginTransaction();
        try {
            if ($request->user()->role == UserRoleEnum::USER) {
                $recipe->update(['status' => RecipeStatusEnum::PENDING]);
            }
            $recipe->update($request->except('products'));
            if ($request->file('image')) {
                $image = new ImageFactory('images/recipes/', $request->file('image'), $recipe, 'public');
                $image->update($recipe->image);
            }
            if ($request->has('products')) {
                $products = json_decode($request->products, true);
                $recipe->recipeItems()->delete();
                foreach ($products as $product) {
                    $result = $recipe->recipeItems()->create([
                        'product_id' => $product['product_id'],
                        'quantity' => $product['quantity'],
                        'optional' => boolval($product['optional']),
                    ]);
                }
            }

            DB::commit();
            return $this->fractal
                ->parseIncludes("recipeItems.product.image,image")
                ->item($recipe->fresh(), new RecipeTransformer())
                ->get();
        } catch (\Exception $e) {
            DB::rollBack();
            \Log::error('Error in file: ' . $e->getFile() . ', line: ' . $e->getLine() . '\nMessage: ' . $e->getMessage());
            return $this->respondUnprocessable();
        }
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
