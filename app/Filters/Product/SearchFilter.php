<?php

namespace App\Filters\Product;

class SearchFilter
{
    public static function handle($query, $name)
    {
        return $query->search($name, ['name']);
    }
}
