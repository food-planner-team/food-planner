<?php

namespace App\Filters\Recipe;

use App\Enum\RecipeStatusEnum;

class ActiveFilter
{
    public static function handle($query)
    {
        return $query->where("status", RecipeStatusEnum::ACCEPTED);
    }
}
