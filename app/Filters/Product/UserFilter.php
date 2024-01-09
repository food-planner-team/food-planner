<?php

namespace App\Filters\Product;

class UserFilter
{
    public static function handle($query, $userId)
    {
        return $query->where("user_id", $userId);
    }
}
