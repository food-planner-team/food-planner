<?php

namespace Database\Seeders;

use App\Imports\ProductImport;
use App\Models\Product;
use App\Models\User;
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

        $productData = [
            ['name' => 'Mleko 2% Mlekowita 1l 2', 'quantity' => '1000', 'quantity_type' => 'ml', 'status' => 1],
            ['name' => 'Mleko 2% Auchan 1l', 'quantity' => '1000', 'quantity_type' => 'ml', 'status' => 1],
            ['name' => 'Mleko 2% Wypasione 1l', 'quantity' => '1000', 'quantity_type' => 'ml', 'status' => 1],
            ['name' => 'Mleko 3,2% Łaciate ', 'quantity' => '1000', 'quantity_type' => 'ml', 'status' => 1],
            ['name' => 'Mleko 3,2% Mlekowita', 'quantity' => '1000', 'quantity_type' => 'ml', 'status' => 1],
            ['name' => 'Mleko 3,2% Auchan', 'quantity' => '1000', 'quantity_type' => 'ml', 'status' => 1],
            ['name' => 'Masło auchan', 'quantity' => '200', 'quantity_type' => 'g', 'status' => 1],
            ['name' => 'Masło Karzygold', 'quantity' => '200', 'quantity_type' => 'g', 'status' => 1],
            ['name' => 'Masło laciate', 'quantity' => '200', 'quantity_type' => 'g', 'status' => 1],
            ['name' => 'Jogurt naturalny zott', 'quantity' => '180', 'quantity_type' => 'g', 'status' => 1],
            ['name' => 'Jogurt naturalny maluta', 'quantity' => '180', 'quantity_type' => 'g', 'status' => 1],
            ['name' => 'Jogurt naturalny Zott bez laktozy', 'quantity' => '180', 'quantity_type' => 'g', 'status' => 1],
            ['name' => 'Jogurt truskawkowy zott', 'quantity' => '150', 'quantity_type' => 'g', 'status' => 1],
            ['name' => 'Jogurt truskawkowy olma', 'quantity' => '150', 'quantity_type' => 'g', 'status' => 1],
            ['name' => 'Jogurt malinowy piątnica', 'quantity' => '150', 'quantity_type' => 'g', 'status' => 1],
            ['name' => 'Jogurt waniliowy piątnica', 'quantity' => '150', 'quantity_type' => 'g', 'status' => 1],
            ['name' => 'Jajko', 'quantity' => '6', 'quantity_type' => 'szt', 'status' => 1],
            ['name' => 'Szynka konserwowa galareta', 'quantity' => '455', 'quantity_type' => 'g', 'status' => 1],
            ['name' => 'Ser żółty Sierpc ', 'quantity' => '150', 'quantity_type' => 'g', 'status' => 1],
            ['name' => 'Ser żółty Auchan', 'quantity' => '500', 'quantity_type' => 'g', 'status' => 1],
            ['name' => 'Ser żółty Serenada', 'quantity' => '200', 'quantity_type' => 'g', 'status' => 1],
            ['name' => 'Ser biały', 'quantity' => '200', 'quantity_type' => 'g', 'status' => 1],
            ['name' => 'Ser pleśniowy', 'quantity' => '200', 'quantity_type' => 'g', 'status' => 1],
            ['name' => 'Chleb razowy', 'quantity' => '500', 'quantity_type' => 'g', 'status' => 1],
            ['name' => 'Chleb pszenny', 'quantity' => '500', 'quantity_type' => 'g', 'status' => 1],
            ['name' => 'Makaron', 'quantity' => '500', 'quantity_type' => 'g', 'status' => 1],
        ];


        $users = User::all()->pluck('id');

        $this->setHeader("Seeding Product")
            ->setAmount(count($productData))
            ->useData($productData)
            ->seedModel(Product::class, function ($product) use ($users) {
                $product->kcal = rand(100, 500);
                $product->user_id = $users->random();
                $product->save();
            });

//        Excel::import(new ProductImport,__DIR__.'/data/seed/products-small.csv');
    }
}
