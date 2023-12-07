<?php

namespace App\Filters\Recipe;

class OwnerFilter
{
    public static function handle($query, $userId)
    {
        return $query->where("user_id", $userId);
    }
}
