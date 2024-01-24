<?php

namespace App\Http\Controllers\v1;

use App\Http\Requests\GenerateRecipesPlanRequest;
use App\Http\Requests\GenerateShoppingListRequest;
use App\Models\Product;
use App\Models\Recipe;
use Carbon\Carbon;
use Illuminate\Http\Response;
use Barryvdh\DomPDF\Facade\Pdf;

class GenerateShoppingListController extends ApiController
{
    /**
     * Display a listing of the resource.
     *
     * @return Response
     */
    public function __invoke(GenerateShoppingListRequest $request): Response
    {

        $dateStart = $request->get('date_start');
        $dateStartName = Carbon::create($dateStart)->locale('pl')->isoFormat('D MMMM');

        $dateEnd = $request->get('date_end');
        $dateSEndName = Carbon::create($dateEnd)->locale('pl')->isoFormat('D MMMM');

        $user = $request->user();
        $userRecipes = $user->userRecipes()
            ->where('date', '>=', $dateStart)
            ->where('date', '<=', $dateEnd)
            ->get();

        $products = [];
        foreach ($userRecipes as $userRecipe) {
            $recipe = Recipe::where('id', $userRecipe->id)->first();
            foreach ($recipe->recipeItems as $recipeItem) {
                if (!isset($products[$recipeItem->product->id])) {
                    $products[$recipeItem->product->id] = 0;
                }
                $products[$recipeItem->product->id] = $products[$recipeItem->product->id] + $recipeItem->quantity;
            }
        }
        $productNames = [];
        foreach ($products as $key => $quantity) {
            $product = Product::where('id', $key)->first();
            $productNames[$product->name] = $product->getFormattedQuantityWithType($quantity);
        }

        view()->share('header', $dateStartName . " - " . $dateSEndName);
        view()->share('products', $productNames);
        $pdf = PDF::loadView('shoppingList', $productNames);
        return $pdf->download('shopping_list.pdf');
    }
}
