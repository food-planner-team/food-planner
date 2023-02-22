<?php

namespace App\Imports;

use App\Models\Product;
use Maatwebsite\Excel\Concerns\SkipsEmptyRows;
use Maatwebsite\Excel\Concerns\ToModel;
use Maatwebsite\Excel\Concerns\WithHeadingRow;

class ProductImport implements ToModel,  SkipsEmptyRows, WithHeadingRow
{
    /**
     * @param array $row
     *
     * @return Product
     */
    public function model(array $row)
    {
        $product = new Product([
            'brand_name' => $row['brand_name'],
            'category_name'    => $row['category_name'],
            'name' => $row['name'],
            'sku' => $row['sku'],
            'external_id' => $row['product_id'],
            'provider' => 'Auchan',
            'quantity_type' => $row['packageinfo_packageunit'],
            'quantity' => $row['packageinfo_packagesize'],
//            'item_volume' => $row['item_volume_info'],
//            'main_image' => $row['Media_MainImage'],
//            'list_image' => $row['Media_ListImage'],
        ]);
        $product->save();
        $product->image()->create([
            'url' => $row['media_mainimage']
        ]);

        return $product;
    }

}
