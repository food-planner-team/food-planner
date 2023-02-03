<?php

namespace Database\Factories;

use App\Models\Product;
use App\Models\Recipe;
use App\Models\RecipeItem;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends Factory<RecipeItem>
 */
class RecipeItemFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition()
    {
        return [
            'quantity' => fake()->numberBetween(1,115),
            'product_id' => Product::all()->random()->id,
            'recipe_id' => Recipe::all()->random()->id,
        ];
    }

    /**
     * Indicate that the model's email address should be unverified.
     *
     * @return static
     */

}
