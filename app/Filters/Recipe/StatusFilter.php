<?php

namespace App\Filters\Recipe;


class StatusFilter
{
    public static function handle($query, $status)
    {
        return $query->where("status", $status);
    }
}
