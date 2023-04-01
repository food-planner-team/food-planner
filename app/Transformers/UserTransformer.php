<?php

namespace App\Transformers;

use App\Models\Recipe;
use app\Models\User;
use League\Fractal\Resource\Collection;
use League\Fractal\TransformerAbstract;

class UserTransformer extends TransformerAbstract
{
    /** @var array */
    protected array $availableIncludes = [
    ];

    public function transform(User $user): array
    {
        return [
            'id'   => $user->id,
            'name' => $user->name,
            'admin' => $user->admin,
            'email' => $user->email,
        ];
    }
}
