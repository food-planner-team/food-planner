<?php

namespace App\Transformers;

use App\Models\Image;
use App\Models\Recipe;
use App\Models\Product;
use League\Fractal\Resource\Collection;
use League\Fractal\TransformerAbstract;

class ProductTransformer extends TransformerAbstract
{
    /** @var array */
    protected array $availableIncludes = [
        'image'
    ];

    public function transform(Product $product): array
    {
        return [
            'id'   =>$product->id,
            'name' =>$product->name,
            'quantity' =>$product->quantity,
            'quantity_type' =>$product->quantityType,
            'provider' =>$product->provider,
        ];
    }
    public function includeImage(Product $product): Collection
    {
        return $this->collection($product->image, new ImageTransformer);
    }

}
