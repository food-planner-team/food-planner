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
        'image',
        'user'
    ];

    public function transform(Product $product): array
    {
        return [
            'id' => $product->id,
            'name' => $product->name,
            'status' => $product->status,
            'kcal' => $product->kcal,
            'user_id' => $product->user_id,
            'quantity' => $product->quantity,
            'quantity_type' => $product->quantity_type,
        ];
    }

    public function includeImage(Product $product)
    {
        if (!$product->image) return $this->null();
        return $this->item($product->image, new ImageTransformer);
    }
    public function includeUser(Product $product)
    {
        return $this->item($product->user, new UserTransformer);
    }

}
