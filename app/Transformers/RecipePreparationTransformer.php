<?php

namespace App\Transformers;

use app\models\RecipePreparation;
use App\Models\Recipe;
use App\Models\RecipeItem;
use League\Fractal\Resource\Collection;
use League\Fractal\TransformerAbstract;

class RecipePreparationTransformer extends TransformerAbstract
{
    /** @var array */
    protected array $availableIncludes = [
        'recipe'
    ];

    public function transform(RecipePreparation $recipePreparation): array
    {
        return [
            'id'   => $recipePreparation->id,
            'order' => $recipePreparation->name,
        ];
    }
    public function includeRecipe(RecipeItem $recipeItem): Collection
    {
        return $this->collection($recipeItem->recipe, new RecipeTransformer);
    }

}
