<?php

namespace App\Filters\Product;

class MainFilter
{
    public static function handle($query, $isMain)
    {
        return $query->where('is_main', $isMain);
    }
}
