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
        $products = [
            [
                'image' => 'banany.png',
                'name' => 'Banany',
                'quantity_type' => 'g',
                'status' => 1
            ],
            [
                'image' => 'jablka.jpg',
                'name' => 'Jabłka',
                'quantity_type' => 'g',
                'status' => 1
            ],
            [
                'image' => 'cytryna.jpg',
                'name' => 'Cytryna',
                'quantity_type' => 'szt',
                'status' => 1
            ],
            [
                'image' => 'pomarancze.jpg',
                'name' => 'Pomarańcze',
                'quantity_type' => 'g',
                'status' => 1
            ],
            [
                'image' => 'paprykaczerwona.jpg',
                'name' => 'Papryka czerwona',
                'quantity_type' => 'szt',
                'status' => 1
            ],
            [
                'image' => 'cukinia.jpg',
                'name' => 'Cukinia',
                'quantity_type' => 'szt',
                'status' => 1
            ],
            [
                'image' => 'brokuly.jpg',
                'name' => 'Brokuł',
                'quantity_type' => 'szt',
                'status' => 1
            ],
            [
                'image' => 'kalafior.jpg',
                'name' => 'Kalafior',
                'quantity_type' => 'szt',
                'status' => 1
            ],
            [
                'image' => 'fasolkaszparagowa.png',
                'name' => 'Fasolka szparagowa',
                'quantity_type' => 'g',
                'status' => 1
            ],
            [
                'image' => 'pomidor.jpg',
                'name' => 'Pomidor',
                'quantity_type' => 'szt',
                'status' => 1
            ],
            [
                'image' => 'pomidorykoktajlowe.png',
                'name' => 'Pomidory koktajlowe',
                'quantity_type' => 'g',
                'status' => 1
            ],
            [
                'image' => 'czosnek.jpg',
                'name' => 'Czosnek',
                'quantity_type' => 'szt',
                'status' => 1
            ],
            [
                'image' => 'cebulaczerwona.jpg',
                'name' => 'Cebula czerwona',
                'quantity_type' => 'kg',
                'status' => 1
            ],
            [
                'image' => 'ziemniaki.jpg',
                'name' => 'Ziemniaki',
                'quantity_type' => 'kg',
                'status' => 1
            ],
            [
                'image' => 'filetzpiersikurczaka.jpg',
                'name' => 'Filet z piersi kurczaka',
                'quantity_type' => 'kg',
                'status' => 1
            ],
            [
                'image' => 'filetzpiersiindyka.jpg',
                'name' => 'Filet z piersi indyka',
                'quantity_type' => 'kg',
                'status' => 1
            ],
            [
                'image' => 'schab.jpg',
                'name' => 'Schab',
                'quantity_type' => 'kg',
                'status' => 1
            ],
            [
                'image' => 'filetzdorsza.jpg',
                'name' => 'Filet z dorsza',
                'quantity_type' => 'kg',
                'status' => 1
            ],
            [
                'image' => 'filetzlososia.jpg',
                'name' => 'Filet z łososia',
                'quantity_type' => 'kg',
                'status' => 1
            ],
            [
                'image' => 'jajka.jpg',
                'name' => 'Jajka',
                'quantity_type' => 'szt',
                'status' => 1
            ],
            [
                'image' => 'mleko.jpg',
                'name' => 'Mleko',
                'quantity_type' => 'ml',
                'status' => 1
            ],
            [
                'image' => 'serzolty.jpg',
                'name' => 'Ser żółty',
                'quantity_type' => 'g',
                'status' => 1
            ],
            [
                'image' => 'mozzarella.jpg',
                'name' => 'Mozzarella',
                'quantity_type' => 'g',
                'status' => 1
            ],
            [
                'image' => 'zieloneoliwki.jpg',
                'name' => 'Zielone oliwki',
                'quantity_type' => 'g',
                'status' => 1
            ],
            [
                'image' => 'kukurydzawpuszce.png',
                'name' => 'Kukurydza w puszce',
                'quantity_type' => 'g',
                'status' => 1
            ],
            [
                'image' => 'koncentratpomidorowy.jpg',
                'name' => 'Koncentrat pomidorowy',
                'quantity_type' => 'g',
                'status' => 1
            ],
            [
                'image' => 'oliwazoliwek.png',
                'name' => 'Oliwa z oliwek',
                'quantity_type' => 'ml',
                'status' => 1
            ],
            [
                'image' => 'olejrzepakowy.jpg',
                'name' => 'Olej rzepakowy',
                'quantity_type' => 'ml',
                'status' => 1
            ],
            [
                'image' => 'maslo.jpg',
                'name' => 'Masło',
                'quantity_type' => 'g',
                'status' => 1
            ],
            [
                'image' => 'makaronspaghetti.jpg',
                'name' => 'Makaron spaghetti',
                'quantity_type' => 'g',
                'status' => 1
            ],
            [
                'image' => 'makaronpenne.png',
                'name' => 'Makaron penne',
                'quantity_type' => 'g',
                'status' => 1
            ],
            [
                'image' => 'makaronfusilli.jpg',
                'name' => 'Makaron fusilli',
                'quantity_type' => 'g',
                'status' => 1
            ],
            [
                'image' => 'kaszagryczana.png',
                'name' => 'Kasza gryczana',
                'quantity_type' => 'g',
                'status' => 1
            ],
            [
                'image' => 'kasajeczmienna.png',
                'name' => 'Kasza jęczmienna',
                'quantity_type' => 'g',
                'status' => 1
            ],
            [
                'image' => 'ryzbasmati.jpg',
                'name' => 'Ryż basmati',
                'quantity_type' => 'kg',
                'status' => 1
            ],
            [
                'image' => 'ryzbrazowy.jpg',
                'name' => 'Ryż brązowy',
                'quantity_type' => 'kg',
                'status' => 1
            ],
            [
                'image' => 'platkiowsiane.jpg',
                'name' => 'Płatki owsiane',
                'quantity_type' => 'g',
                'status' => 1
            ],
            [
                'image' => 'makapszenna.jpg',
                'name' => 'Mąka pszenna',
                'quantity_type' => 'kg',
                'status' => 1
            ],
            [
                'image' => 'skrobiaziemniaczana.png',
                'name' => 'Skrobia ziemniaczana',
                'quantity_type' => 'g',
                'status' => 1
            ],
            [
                'image' => 'migdaly.jpg',
                'name' => 'Migdały',
                'quantity_type' => 'kg',
                'status' => 1
            ],
            [
                'image' => 'chleb.jpg',
                'name' => 'Chleb',
                'quantity_type' => 'kg',
                'status' => 1
            ],
            [
                'image' => 'bulka.jpg',
                'name' => 'Bułka',
                'quantity_type' => 'g',
                'status' => 1
            ],
            [
                'image' => 'chlebtostowy.jpg',
                'name' => 'Chleb tostowy',
                'quantity_type' => 'g',
                'status' => 1
            ],
            [
                'image' => 'packitortilli.jpg',
                'name' => 'Placki tortilli',
                'quantity_type' => 'g',
                'status' => 1
            ],
            [
                'image' => 'wafleryzowe.jpg',
                'name' => 'Wafle ryżowe',
                'quantity_type' => 'g',
                'status' => 1
            ],
            [
                'image' => 'ketchup.png',
                'name' => 'Ketchup',
                'quantity_type' => 'g',
                'status' => 1
            ],
            [
                'image' => 'musztarda.jpg',
                'name' => 'Musztarda',
                'quantity_type' => 'g',
                'status' => 1
            ],
            [
                'image' => 'majonez.jpg',
                'name' => 'Majonez',
                'quantity_type' => 'ml',
                'status' => 1
            ],
            [
                'image' => 'chrzan.png',
                'name' => 'Chrzan',
                'quantity_type' => 'g',
                'status' => 1
            ],
            [
                'image' => 'ocet.png',
                'name' => 'Ocet',
                'quantity_type' => 'ml',
                'status' => 1
            ],
            [
                'image' => 'sol.jpg',
                'name' => 'Sól',
                'quantity_type' => 'kg',
                'status' => 1
            ],
            [
                'image' => 'cukier.png',
                'name' => 'Cukier',
                'quantity_type' => 'kg',
                'status' => 1
            ],
            [
                'image' => 'paprykaslodka.jpg',
                'name' => 'Papryka słodka',
                'quantity_type' => 'g',
                'status' => 1
            ],
            [
                'image' => 'paprykaostra.jpg',
                'name' => 'Papryka ostra',
                'quantity_type' => 'g',
                'status' => 1
            ],
            [
                'image' => 'curry.jpg',
                'name' => 'Curry',
                'quantity_type' => 'g',
                'status' => 1
            ],
            [
                'image' => 'oregano.jpg',
                'name' => 'Oregano',
                'quantity_type' => 'g',
                'status' => 1
            ],
            [
                'image' => 'bazylia.jpg',
                'name' => 'Bazylia',
                'quantity_type' => 'g',
                'status' => 1
            ],
            [
                'image' => 'liscielaurowe.jpg',
                'name' => 'Liście laurowe',
                'quantity_type' => 'g',
                'status' => 1
            ],
            [
                'image' => 'zieleangielski.png',
                'name' => 'Ziele angielskie',
                'quantity_type' => 'g',
                'status' => 1
            ],
            [
                'image' => 'majeranek.jpg',
                'name' => 'Majeranek',
                'quantity_type' => 'g',
                'status' => 1
            ],
            [
                'image' => 'drozdzesuszone.jpg',
                'name' => 'Drożdże szuszone',
                'quantity_type' => 'g',
                'status' => 1
            ],
            [
                'image' => 'salata.jpg',
                'name' => 'Sałata',
                'quantity_type' => 'szt',
                'status' => 1
            ],
            [
                'image' => 'wodagazowana.png',
                'name' => 'Woda gazowana',
                'quantity_type' => 'ml',
                'status' => 1
            ],
            [
                'image' => 'wodaniegazowana.jpg',
                'name' => 'Woda niegazowana',
                'quantity_type' => 'ml',
                'status' => 1
            ],
            [
                'image' => 'sokpomaranczowy.jpg',
                'name' => 'Sok pomarańczowy',
                'quantity_type' => 'ml',
                'status' => 1
            ],
            [
                'image' => 'sokjablkowy.png',
                'name' => 'Sok jabłkowy',
                'quantity_type' => 'ml',
                'status' => 1
            ],
        ];

        $users = User::all()->pluck('id');

        $this->setHeader("Seeding Product")
            ->setAmount(count($products))
            ->useData($products)
            ->seedModel(Product::class, function ($product) use ($users) {
                $product->kcal = rand(100, 500);
                $product->user_id = $users->random();
                $path = "";
                if (env('APP_ENV') == 'local'){
                    $path = __DIR__ . '\data\seed\images\products\/' . $product->image;
                } else {
                    $path = __DIR__ . '/data/seed/images/products' . $product->image;
                }
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


