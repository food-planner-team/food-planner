<?php

namespace Database\Seeders;

use App\Models\MainProduct;
use App\Models\Product;
use App\Models\Recipe;
use App\Models\RecipeItem;

class RecipeItemsSeeder extends ModelSeeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        // $products = MainProduct::get()->pluck('id');
        // $recipes = Recipe::all()->pluck('id');

        // $this->setHeader("Seeding recipes")
        //     ->setAmount(1000)
        //     ->seedModel(RecipeItem::class, function ($recipeItem) use ($recipes, $products) {
        //         $recipeItem->product_id = $products->random();
        //         $recipeItem->recipe_id = $recipes->random();
        //         $recipeItem->save();
        //     });

    }
}
