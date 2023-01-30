<?php

namespace App\Transformers;

use App\Models\Recipe;
use League\Fractal\Resource\Collection;
use League\Fractal\TransformerAbstract;

class RecipeTransformer extends TransformerAbstract
{
    /** @var array */
    protected array $availableIncludes = [
        'image'
    ];

    public function transform(Recipe $recipe): array
    {
        return [
            'id'   => $recipe->id,
            'name' => $recipe->name,
            'description' => $recipe->description,
            'preparation_time' => $recipe->preparation_time,
        ];
    }

    public function includeImage(Recipe $recipe): Collection
    {
        return $this->collection($recipe->image, new ImageTransformer);
    }
}
