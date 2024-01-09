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
        'recipe',
        'product',
    ];

    public function transform(RecipeItem $recipeItem): array
    {
        return [
            'id' => $recipeItem->id,
            'quantity' => $recipeItem->quantity,
            'optional' => $recipeItem->optional,
            'url' => $recipeItem->url,
        ];
    }

    public function includeRecipe(RecipeItem $recipeItem): Collection
    {
        return $this->collection($recipeItem->recipe, new RecipeTransformer);
    }

    public function includeProduct(RecipeItem $recipeItem)
    {
        if (!$recipeItem->product) {
            return null;
        }
        return $this->item($recipeItem->product, new ProductTransformer());
    }

}
