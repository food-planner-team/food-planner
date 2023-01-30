<?php

namespace App\Transformers;

use App\Models\Image;
use App\Models\Recipe;
use League\Fractal\Resource\Collection;
use League\Fractal\TransformerAbstract;

class ImageTransformer extends TransformerAbstract
{
    /** @var array */
    protected array $availableIncludes = [
        'image'
    ];

    public function transform(Image $image): array
    {
        return [
            'id'   => $image->id,
            'name' => $image->name,
            'path' => $image->path,
            'url' => $image->url,
        ];
    }

}
