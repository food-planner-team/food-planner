<?php

namespace App\Filters\User;

class RoleFilter
{
    public static function handle($query, $role)
    {
        return $query->where("role", $role);
    }
}
