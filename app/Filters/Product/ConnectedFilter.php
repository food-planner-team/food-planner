<?php

namespace App\Filters\Product;

class ConnectedFilter
{

    /**
     * @param $query
     * @param $isConnected
     * @return mixed
     */
    public static function handle($query, $isConnected)
    {
        if ($isConnected) {
            return $query->where('main_product_id', '!=', null);
        }
        return $query->where('main_product_id', null);
    }
}
