<?php

namespace App\Transformers;

use App\Models\Image;
use App\Models\MainProduct;
use App\Models\Recipe;
use App\Models\Product;
use League\Fractal\Resource\Collection;
use League\Fractal\TransformerAbstract;

class MainProductTransformer extends TransformerAbstract
{
    /** @var array */
    protected array $availableIncludes = [
        'products',
        'defaultProduct'
    ];

    public function transform(MainProduct $mainProduct): array
    {
        return [
            'id' => $mainProduct->id,
            'name' => $mainProduct->name,
            'quantity_type' => $mainProduct->quantity_type,
        ];
    }

    public function includeProducts(MainProduct $mainProduct)
    {
        return $this->collection($mainProduct->products, new ProductTransformer);
    }
    public function includeDefaultProduct(MainProduct $mainProduct)
    {
        if(!$mainProduct->defaultProduct) return $this->null();
        return $this->item($mainProduct->defaultProduct, new ProductTransformer);
    }

}
