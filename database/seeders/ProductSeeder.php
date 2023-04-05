<?php

namespace Database\Seeders;

use App\Imports\ProductImport;
use App\Models\Product;
use Maatwebsite\Excel\Facades\Excel;

class ProductSeeder extends ModelSeeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $mainProductData = [
            ['id' => '1', 'name' => 'Mleko 2% 1l', 'quantity' => '1000', 'quantity_type' => 'ml'],
            ['id' => '2', 'name' => 'Mleko 3,2%', 'quantity' => '1000', 'quantity_type' => 'ml'],
            ['id' => '3', 'name' => 'Masło', 'quantity' => '180', 'quantity_type' => 'g'],
            ['id' => '4', 'name' => 'Jogurt naturalny', 'quantity' => '180', 'quantity_type' => 'g'],
            ['id' => '5', 'name' => 'Jogurt truskawkowy', 'quantity' => '450', 'quantity_type' => 'g'],
            ['id' => '6', 'name' => 'Jogurt malinowy', 'quantity' => '450', 'quantity_type' => 'g'],
            ['id' => '7', 'name' => 'Jogurt waniliowy', 'quantity' => '450', 'quantity_type' => 'g'],
            ['id' => '8', 'name' => 'Jajko', 'quantity' => '6', 'quantity_type' => 'szt'],
            ['id' => '9', 'name' => 'Szynka', 'quantity' => '200', 'quantity_type' => 'g'],
            ['id' => '10', 'name' => 'Ser żółty', 'quantity' => '200', 'quantity_type' => 'g'],
            ['id' => '11', 'name' => 'Ser biały', 'quantity' => '200', 'quantity_type' => 'g'],
            ['id' => '12', 'name' => 'Ser pleśniowy', 'quantity' => '200', 'quantity_type' => 'g'],
            ['id' => '13', 'name' => 'Chleb razowy', 'quantity' => '500', 'quantity_type' => 'g'],
            ['id' => '14', 'name' => 'Chleb pszenny', 'quantity' => '500', 'quantity_type' => 'g'],
            ['id' => '15', 'name' => 'Makaron', 'quantity' => '500', 'quantity_type' => 'g']
        ];
        $productData = [
            ['name' => 'Mleko 2% Mlekowita 1l 2', 'quantity' => '1000', 'quantity_type' => 'ml','external_id'=>'174245','provider'=>'Auchan','parent_id'=>'1'],
            ['name' => 'Mleko 2% Auchan 1l', 'quantity' => '1000', 'quantity_type' => 'ml','external_id'=>'221373','provider'=>'Auchan','parent_id'=>'1'],
            ['name' => 'Mleko 2% Wypasione 1l', 'quantity' => '1000', 'quantity_type' => 'ml','external_id'=>'645806','provider'=>'Auchan','parent_id'=>'1'],

            ['name' => 'Mleko 3,2% Łaciate ', 'quantity' => '1000', 'quantity_type' => 'ml','external_id'=>'997334','provider'=>'Auchan','parent_id'=>'2'],
            ['name' => 'Mleko 3,2% Mlekowita', 'quantity' => '1000', 'quantity_type' => 'ml','external_id'=>'426864','provider'=>'Auchan','parent_id'=>'2'],
            ['name' => 'Mleko 3,2% Auchan', 'quantity' => '1000', 'quantity_type' => 'ml','external_id'=>'221375','provider'=>'Auchan','parent_id'=>'2'],

            ['name' => 'Masło auchan', 'quantity' => '200', 'quantity_type' => 'g','external_id'=>'361347','provider'=>'Auchan','parent_id'=>'3'],
            ['name' => 'Masło Karzygold', 'quantity' => '200', 'quantity_type' => 'g','external_id'=>'188827','provider'=>'Auchan','parent_id'=>'3'],
            ['name' => 'Masło laciate', 'quantity' => '200', 'quantity_type' => 'g','external_id'=>'997335','provider'=>'Auchan','parent_id'=>'3'],

            ['name' => 'Jogurt naturalny zott', 'quantity' => '180', 'quantity_type' => 'g','external_id'=>'658903','provider'=>'Auchan','parent_id'=>'4'],
            ['name' => 'Jogurt naturalny maluta', 'quantity' => '180', 'quantity_type' => 'g','external_id'=>'416183','provider'=>'Auchan','parent_id'=>'4'],
            ['name' => 'Jogurt naturalny Zott bez laktozy', 'quantity' => '180', 'quantity_type' => 'g','external_id'=>'264679','provider'=>'Auchan','parent_id'=>'4'],

            ['name' => 'Jogurt truskawkowy zott', 'quantity' => '150', 'quantity_type' => 'g','external_id'=>'311736','provider'=>'Auchan','parent_id'=>'5'],
            ['name' => 'Jogurt truskawkowy olma', 'quantity' => '150', 'quantity_type' => 'g','external_id'=>'77660','provider'=>'Auchan','parent_id'=>'5'],

            ['name' => 'Jogurt malinowy piątnica', 'quantity' => '150', 'quantity_type' => 'g','external_id'=>'96761','provider'=>'Auchan','parent_id'=>'6'],
            ['name' => 'Jogurt waniliowy piątnica', 'quantity' => '150', 'quantity_type' => 'g','external_id'=>'657987','provider'=>'Auchan','parent_id'=>'7'],
            ['name' => 'Jajko', 'quantity' => '6', 'quantity_type' => 'szt','external_id'=>'','provider'=>'Auchan','parent_id'=>'8'],
            ['name' => 'Szynka konserwowa galareta', 'quantity' => '455', 'quantity_type' => 'g','external_id'=>'297994','provider'=>'Auchan','parent_id'=>'9'],

            ['name' => 'Ser żółty Sierpc ', 'quantity' => '150', 'quantity_type' => 'g','external_id'=>'643509','provider'=>'Auchan','parent_id'=>'10'],
            ['name' => 'Ser żółty Auchan', 'quantity' => '500', 'quantity_type' => 'g','external_id'=>'840567','provider'=>'Auchan','parent_id'=>'10'],
            ['name' => 'Ser żółty Serenada', 'quantity' => '200', 'quantity_type' => 'g','external_id'=>'157666','provider'=>'Auchan','parent_id'=>'10'],

            ['name' => 'Ser biały', 'quantity' => '200', 'quantity_type' => 'g','external_id'=>'','provider'=>'Auchan','parent_id'=>'11'],
            ['name' => 'Ser pleśniowy', 'quantity' => '200', 'quantity_type' => 'g','external_id'=>'','provider'=>'Auchan','parent_id'=>'12'],
            ['name' => 'Chleb razowy', 'quantity' => '500', 'quantity_type' => 'g','external_id'=>'','provider'=>'Auchan','parent_id'=>'13'],
            ['name' => 'Chleb pszenny', 'quantity' => '500', 'quantity_type' => 'g','external_id'=>'','provider'=>'Auchan','parent_id'=>'14'],
            ['name' => 'Makaron', 'quantity' => '500', 'quantity_type' => 'g','external_id'=>'','provider'=>'Auchan','parent_id'=>'15'],
        ];

//        $allProducts = array_merge($mainProductData,$productData);
//
//        $this->setHeader("Seeding Product")
//            ->setAmount(count($allProducts))
//            ->useData($allProducts)
//            ->seedModel(Product::class, function ($product) {
//                $product->save();
//            });

        Excel::import(new ProductImport,__DIR__.'/data/seed/products-small.csv');
    }
}
