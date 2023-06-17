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
        'recipeUser'
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
        ];
        if ($recipe->pivot) {
            $data['order'] = $recipe->pivot->order;
            $data['date'] = $recipe->pivot->date;
        }
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
}
