<?php

namespace App\Filters\Notification;

class UserFilter
{
    public static function handle($query, $userId)
    {
        return $query->where("notifiable_type", "App\Models\User")
            ->where("notifiable_id", $userId);
    }
}
