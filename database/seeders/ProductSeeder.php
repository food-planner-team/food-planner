<?php

namespace Database\Seeders;

use App\Factories\ImageFactory;
use App\Models\Product;
use App\Models\User;


use Illuminate\Http\UploadedFile;

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
            ['image' => 'tortille_z_kurczakiem.jpg', 'name' => 'Mleko 2% Mlekowita 1l 2', 'quantity' => '1000', 'quantity_type' => 'ml', 'status' => 1],
            ['image' => 'tortille_z_kurczakiem.jpg', 'name' => 'Mleko 2% Auchan 1l', 'quantity' => '1000', 'quantity_type' => 'ml', 'status' => 1],
            ['image' => 'tortille_z_kurczakiem.jpg', 'name' => 'Mleko 2% Wypasione 1l', 'quantity' => '1000', 'quantity_type' => 'ml', 'status' => 1],
            ['image' => 'tortille_z_kurczakiem.jpg', 'name' => 'Mleko 3,2% Łaciate ', 'quantity' => '1000', 'quantity_type' => 'ml', 'status' => 1],
            ['image' => 'tortille_z_kurczakiem.jpg', 'name' => 'Mleko 3,2% Mlekowita', 'quantity' => '1000', 'quantity_type' => 'ml', 'status' => 1],
            ['image' => 'tortille_z_kurczakiem.jpg', 'name' => 'Mleko 3,2% Auchan', 'quantity' => '1000', 'quantity_type' => 'ml', 'status' => 1],
            ['image' => 'tortille_z_kurczakiem.jpg', 'name' => 'Masło auchan', 'quantity' => '200', 'quantity_type' => 'g', 'status' => 1],
            ['image' => 'tortille_z_kurczakiem.jpg', 'name' => 'Masło Karzygold', 'quantity' => '200', 'quantity_type' => 'g', 'status' => 1],
            ['image' => 'tortille_z_kurczakiem.jpg', 'name' => 'Masło laciate', 'quantity' => '200', 'quantity_type' => 'g', 'status' => 1],
            ['image' => 'tortille_z_kurczakiem.jpg', 'name' => 'Jogurt naturalny zott', 'quantity' => '180', 'quantity_type' => 'g', 'status' => 1],
            ['image' => 'tortille_z_kurczakiem.jpg', 'name' => 'Jogurt naturalny maluta', 'quantity' => '180', 'quantity_type' => 'g', 'status' => 1],
            ['image' => 'tortille_z_kurczakiem.jpg', 'name' => 'Jogurt naturalny Zott bez laktozy', 'quantity' => '180', 'quantity_type' => 'g', 'status' => 1],
            ['image' => 'tortille_z_kurczakiem.jpg', 'name' => 'Jogurt truskawkowy zott', 'quantity' => '150', 'quantity_type' => 'g', 'status' => 1],
            ['image' => 'tortille_z_kurczakiem.jpg', 'name' => 'Jogurt truskawkowy olma', 'quantity' => '150', 'quantity_type' => 'g', 'status' => 1],
            ['image' => 'tortille_z_kurczakiem.jpg', 'name' => 'Jogurt malinowy piątnica', 'quantity' => '150', 'quantity_type' => 'g', 'status' => 1],
            ['image' => 'tortille_z_kurczakiem.jpg', 'name' => 'Jogurt waniliowy piątnica', 'quantity' => '150', 'quantity_type' => 'g', 'status' => 1],
            ['image' => 'tortille_z_kurczakiem.jpg', 'name' => 'Jajko', 'quantity' => '6', 'quantity_type' => 'szt', 'status' => 1],
            ['image' => 'tortille_z_kurczakiem.jpg', 'name' => 'Szynka konserwowa galareta', 'quantity' => '455', 'quantity_type' => 'g', 'status' => 1],
            ['image' => 'tortille_z_kurczakiem.jpg', 'name' => 'Ser żółty Sierpc ', 'quantity' => '150', 'quantity_type' => 'g', 'status' => 1],
            ['image' => 'tortille_z_kurczakiem.jpg', 'name' => 'Ser żółty Auchan', 'quantity' => '500', 'quantity_type' => 'g', 'status' => 1],
            ['image' => 'tortille_z_kurczakiem.jpg', 'name' => 'Ser żółty Serenada', 'quantity' => '200', 'quantity_type' => 'g', 'status' => 1],
            ['image' => 'tortille_z_kurczakiem.jpg', 'name' => 'Ser biały', 'quantity' => '200', 'quantity_type' => 'g', 'status' => 1],
            ['image' => 'tortille_z_kurczakiem.jpg', 'name' => 'Ser pleśniowy', 'quantity' => '200', 'quantity_type' => 'g', 'status' => 1],
            ['image' => 'tortille_z_kurczakiem.jpg', 'name' => 'Chleb razowy', 'quantity' => '500', 'quantity_type' => 'g', 'status' => 1],
            ['image' => 'tortille_z_kurczakiem.jpg', 'name' => 'Chleb pszenny', 'quantity' => '500', 'quantity_type' => 'g', 'status' => 1],
            ['image' => 'tortille_z_kurczakiem.jpg', 'name' => 'Makaron', 'quantity' => '500', 'quantity_type' => 'g', 'status' => 1],
        ];


        $users = User::all()->pluck('id');

        $this->setHeader("Seeding Product")
            ->setAmount(count($productData))
            ->useData($productData)
            ->seedModel(Product::class, function ($product) use ($users) {
                $product->kcal = rand(100, 500);
                $product->user_id = $users->random();
                $path = __DIR__ . '\data\seed\images\\' . $product->image;
                unset($product->image);
                $product->save();
                $product->save();
                if (file_exists($path)) {
                    $file = new UploadedFile($path, $product->id, mime_content_type($path), null, false, true);
                    $image = new ImageFactory('images/products/', $file, $product, 'public');
                    $image->create();
                }
            });
    }
}


