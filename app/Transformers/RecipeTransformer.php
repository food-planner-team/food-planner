<?php

namespace App\Transformers;

use App\Models\Recipe;
use League\Fractal\Resource\Collection;
use League\Fractal\Resource\Item;
use League\Fractal\TransformerAbstract;

class RecipeTransformer extends TransformerAbstract
{
    /** @var array */
    protected array $availableIncludes = [
        'image',
        'recipeItems',
        'user'
    ];

    public function transform(Recipe $recipe): array
    {
        $data = [
            'id' => $recipe->id,
            'name' => $recipe->name,
            'description' => $recipe->description,
            'kcal' => $recipe->kcal,
            'preparation' => $recipe->preparation,
            'preparation_time' => $recipe->preparation_time,
            'status' => $recipe->status,
            'user_id' => $recipe->user_id,
            'created_at' => $recipe->created_at->format('Y-m-d'),
        ];
        return $data;
    }

    public function includeImage(Recipe $recipe)
    {
        if (!$recipe->image) {
            return null;
        }
        return $this->item($recipe->image, new ImageTransformer);
    }

    public function includeRecipeItems(Recipe $recipe): Collection
    {
        return $this->collection($recipe->recipeItems, new RecipeItemTransformer());
    }
    public function includeUser(Recipe $recipe): Item
    {
        return $this->item($recipe->user, new UserTransformer());
    }
}
