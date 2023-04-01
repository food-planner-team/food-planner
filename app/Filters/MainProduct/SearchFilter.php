<?php

namespace App\Filters\MainProduct;

class SearchFilter
{
    public static function handle($query, $name)
    {
        return $query->search($name, ['name']);
    }
}
