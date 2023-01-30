<?php

namespace App\Transformers;

use App\Models\Recipe;
use App\Models\RecipeItem;
use League\Fractal\Resource\Collection;
use League\Fractal\TransformerAbstract;

class RecipeItemTransformer extends TransformerAbstract
{
    /** @var array */
    protected array $availableIncludes = [
        'recipe'
    ];

    public function transform(RecipeItem $recipeItem): array
    {
        return [
            'id'   => $recipeItem->id,
            'receipt_id'   => $recipeItem->receipt_id,
            'quantity' => $recipeItem->quantity,
            'optional' => $recipeItem->optional,
            'url' => $recipeItem->url,
        ];
    }
    public function includeRecipe(RecipeItem $recipeItem): Collection
    {
        return $this->collection($recipeItem->image, new RecipeTransformer);
    }

}
