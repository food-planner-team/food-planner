<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Str;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\User>
 */
class RecipeFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition()
    {
        return [
            'name' => fake()->text(),
            'description' => fake()->text(),
            'preparation_time' => fake()->numberBetween(1,115),
        ];
    }

    /**
     * Indicate that the model's email address should be unverified.
     *
     * @return static
     */

}
