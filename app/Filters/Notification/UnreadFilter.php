<?php

namespace App\Filters\Notification;

class UnreadFilter
{
    public static function handle($query)
    {
        return $query->whereNull("read_at");
    }
}
