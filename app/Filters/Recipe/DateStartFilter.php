<?php

namespace App\Filters\Recipe;

class DateStartFilter
{
    public static function handle($query, $date)
    {
        return $query->where('date', '>=', $date);
    }
}
