<?php

namespace App\Filters\Recipe;

class DateFilter
{
    public static function handle($query, $date)
    {
        return $query->where('date', '=', $date);
    }
}
