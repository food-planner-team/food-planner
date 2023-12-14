<?php

namespace App\Http\Controllers\v1;

use App\Http\Requests\UpdateRoleUserRequest;
use App\Models\User;
use App\Transformers\RecipeTransformer;

class UserUpdateRoleController extends ApiController
{
    public function __invoke(UpdateRoleUserRequest $request, User $user)
    {
        $user->update(['role' => $request->get("role")]);

        return $this->fractal
            ->item($user, new RecipeTransformer())
            ->get();
    }
}
