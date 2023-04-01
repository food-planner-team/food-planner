<?php

namespace App\Filters\Recipe;

class SearchFilter
{
    public static function handle($query, $name)
    {
        return $query->search($name, ['name']);
    }
}
