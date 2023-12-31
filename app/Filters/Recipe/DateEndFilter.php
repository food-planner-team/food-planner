<?php

namespace App\Filters\Recipe;

class DateEndFilter
{
    public static function handle($query, $date)
    {
        return $query->where('date', '<=', $date);
    }
}
