<?php

namespace App\Transformers;

use App\Models\Image;
use App\Models\Meal;
use App\Models\Recipe;
use League\Fractal\Resource\Collection;
use League\Fractal\TransformerAbstract;

class MealTransformer extends TransformerAbstract
{
    /** @var array */
    protected array $availableIncludes = [
    ];

    public function transform(Meal $meal): array
    {
        return [
            'id'   => $meal->id,
            'name' => $meal->name,
            'order' => $meal->order,
        ];
    }

}
