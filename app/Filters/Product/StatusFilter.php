<?php

namespace App\Filters\Product;


class StatusFilter
{
    public static function handle($query, $status)
    {
        return $query->where("status", $status);
    }
}
