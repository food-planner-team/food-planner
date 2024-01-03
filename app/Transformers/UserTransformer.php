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
        'image'
    ];

    public function transform(User $user): array
    {
        return [
            'id'   => $user->id,
            'name' => $user->name,
            'role' => $user->role,
            'email' => $user->email,
            'kcal_limit' => $user->kcal_limit,
            'created_at' => $user->created_at->format('Y-m-d'),
        ];
    }
    public function includeImage(User $user): ?\League\Fractal\Resource\Item
    {
        if(!$user->image){
            return null;
        }
        return $this->item($user->image, new ImageTransformer());
    }
}
