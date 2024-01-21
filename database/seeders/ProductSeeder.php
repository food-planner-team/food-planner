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
                'quantity' => '1',
                'quantity_type' => 'kg',
                'status' => 1
            ],
            [
                'image' => 'jablka.jpg',
                'name' => 'Jabłka',
                'quantity' => '1',
                'quantity_type' => 'kg',
                'status' => 1
            ],
            [
                'image' => 'cytryna.jpg',
                'name' => 'Cytryna',
                'quantity' => '1',
                'quantity_type' => 'szt',
                'status' => 1
            ],
            [
                'image' => 'pomarancze.jpg',
                'name' => 'Pomarańcze',
                'quantity' => '1',
                'quantity_type' => 'kg',
                'status' => 1
            ],
            [
                'image' => 'paprykaczerwona.jpg',
                'name' => 'Papryka czerwona',
                'quantity' => '1',
                'quantity_type' => 'szt',
                'status' => 1
            ],
            [
                'image' => 'cukinia.jpg',
                'name' => 'Cukinia',
                'quantity' => '1',
                'quantity_type' => 'szt',
                'status' => 1
            ],
            [
                'image' => 'brokuly.jpg',
                'name' => 'Brokuł',
                'quantity' => '1',
                'quantity_type' => 'szt',
                'status' => 1
            ],
            [
                'image' => 'kalafior.jpg',
                'name' => 'Kalafior',
                'quantity' => '1',
                'quantity_type' => 'szt',
                'status' => 1
            ],
            [
                'image' => 'fasolkaszparagowa.png',
                'name' => 'Fasolka szparagowa',
                'quantity' => '500',
                'quantity_type' => 'g',
                'status' => 1
            ],
            [
                'image' => 'pomidor.jpg',
                'name' => 'Pomidor',
                'quantity' => '1',
                'quantity_type' => 'szt',
                'status' => 1
            ],
            [
                'image' => 'pomidorykoktajlowe.png',
                'name' => 'Pomidory koktajlowe',
                'quantity' => '500',
                'quantity_type' => 'g',
                'status' => 1
            ],
            [
                'image' => 'czosnek.jpg',
                'name' => 'Czosnek',
                'quantity' => '1',
                'quantity_type' => 'szt',
                'status' => 1
            ],
            [
                'image' => 'cebulaczerwona.jpg',
                'name' => 'Cebula czerwona',
                'quantity' => '1',
                'quantity_type' => 'kg',
                'status' => 1
            ],
            [
                'image' => 'ziemniaki.jpg',
                'name' => 'Ziemniaki',
                'quantity' => '2.5',
                'quantity_type' => 'kg',
                'status' => 1
            ],
            [
                'image' => 'filetzpiersikurczaka.jpg',
                'name' => 'Filet z piersi kurczaka',
                'quantity' => '1',
                'quantity_type' => 'kg',
                'status' => 1
            ],
            [
                'image' => 'filetzpiersiindyka.jpg',
                'name' => 'Filet z piersi indyka',
                'quantity' => '1',
                'quantity_type' => 'kg',
                'status' => 1
            ],
            [
                'image' => 'schab.jpg',
                'name' => 'Schab',
                'quantity' => '1',
                'quantity_type' => 'kg',
                'status' => 1
            ],
            [
                'image' => 'filetzdorsza.jpg',
                'name' => 'Filet z dorsza',
                'quantity' => '1',
                'quantity_type' => 'kg',
                'status' => 1
            ],
            [
                'image' => 'filetzlososia.jpg',
                'name' => 'Filet z łososia',
                'quantity' => '1',
                'quantity_type' => 'kg',
                'status' => 1
            ],
            [
                'image' => 'jajka.jpg',
                'name' => 'Jajka',
                'quantity' => '10',
                'quantity_type' => 'szt',
                'status' => 1
            ],
            [
                'image' => 'mleko.jpg',
                'name' => 'Mleko',
                'quantity' => '1',
                'quantity_type' => 'l',
                'status' => 1
            ],
            [
                'image' => 'serzolty.jpg',
                'name' => 'Ser żółty',
                'quantity' => '150',
                'quantity_type' => 'g',
                'status' => 1
            ],
            [
                'image' => 'mozzarella.jpg',
                'name' => 'Mozzarella',
                'quantity' => '125',
                'quantity_type' => 'g',
                'status' => 1
            ],
            [
                'image' => 'zieloneoliwki.jpg',
                'name' => 'Zielone oliwki',
                'quantity' => '920',
                'quantity_type' => 'g',
                'status' => 1
            ],
            [
                'image' => 'kukurydzawpuszce.png',
                'name' => 'Kukurydza w puszce',
                'quantity' => '400',
                'quantity_type' => 'g',
                'status' => 1
            ],
            [
                'image' => 'koncentratpomidorowy.jpg',
                'name' => 'Koncentrat pomidorowy',
                'quantity' => '90',
                'quantity_type' => 'g',
                'status' => 1
            ],
            [
                'image' => 'oliwazoliwek.png',
                'name' => 'Oliwa z oliwek',
                'quantity' => '500',
                'quantity_type' => 'ml',
                'status' => 1
            ],
            [
                'image' => 'olejrzepakowy.jpg',
                'name' => 'Olej rzepakowy',
                'quantity' => '3',
                'quantity_type' => 'l',
                'status' => 1
            ],
            [
                'image' => 'maslo.jpg',
                'name' => 'Masło',
                'quantity' => '200',
                'quantity_type' => 'g',
                'status' => 1
            ],
            [
                'image' => 'makaronspaghetti.jpg',
                'name' => 'Makaron spaghetti',
                'quantity' => '500',
                'quantity_type' => 'g',
                'status' => 1
            ],
            [
                'image' => 'makaronpenne.png',
                'name' => 'Makaron penne',
                'quantity' => '1000',
                'quantity_type' => 'g',
                'status' => 1
            ],
            [
                'image' => 'makaronfusilli.jpg',
                'name' => 'Makaron fusilli',
                'quantity' => '500',
                'quantity_type' => 'g',
                'status' => 1
            ],
            [
                'image' => 'kaszagryczana.png',
                'name' => 'Kasza gryczana',
                'quantity' => '400',
                'quantity_type' => 'g',
                'status' => 1
            ],
            [
                'image' => 'kasajeczmienna.png',
                'name' => 'Kasza jęczmienna',
                'quantity' => '400',
                'quantity_type' => 'g',
                'status' => 1
            ],
            [
                'image' => 'ryzbasmati.jpg',
                'name' => 'Ryż basmati',
                'quantity' => '1',
                'quantity_type' => 'kg',
                'status' => 1
            ],
            [
                'image' => 'ryzbrazowy.jpg',
                'name' => 'Ryż brązowy',
                'quantity' => '1',
                'quantity_type' => 'kg',
                'status' => 1
            ],
            [
                'image' => 'platkiowsiane.jpg',
                'name' => 'Płatki owsiane',
                'quantity' => '600',
                'quantity_type' => 'g',
                'status' => 1
            ],
            [
                'image' => 'makapszenna.jpg',
                'name' => 'Mąka pszenna',
                'quantity' => '1',
                'quantity_type' => 'kg',
                'status' => 1
            ],
            [
                'image' => 'skrobiaziemniaczana.png',
                'name' => 'Skrobia ziemniaczana',
                'quantity' => '500',
                'quantity_type' => 'g',
                'status' => 1
            ],
            [
                'image' => 'migdaly.jpg',
                'name' => 'Migdały',
                'quantity' => '1',
                'quantity_type' => 'kg',
                'status' => 1
            ],
            [
                'image' => 'chleb.jpg',
                'name' => 'Chleb',
                'quantity' => '1',
                'quantity_type' => 'kg',
                'status' => 1
            ],
            [
                'image' => 'bulka.jpg',
                'name' => 'Bułka',
                'quantity' => '50',
                'quantity_type' => 'g',
                'status' => 1
            ],
            [
                'image' => 'chlebtostowy.jpg',
                'name' => 'Chleb tostowy',
                'quantity' => '500',
                'quantity_type' => 'g',
                'status' => 1
            ],
            [
                'image' => 'packitortilli.jpg',
                'name' => 'Placki tortilli',
                'quantity' => '240',
                'quantity_type' => 'g',
                'status' => 1
            ],
            [
                'image' => 'wafleryzowe.jpg',
                'name' => 'Wafle ryżowe',
                'quantity' => '130',
                'quantity_type' => 'g',
                'status' => 1
            ],
            [
                'image' => 'ketchup.png',
                'name' => 'Ketchup',
                'quantity' => '430',
                'quantity_type' => 'g',
                'status' => 1
            ],
            [
                'image' => 'musztarda.jpg',
                'name' => 'Musztarda',
                'quantity' => '175',
                'quantity_type' => 'g',
                'status' => 1
            ],
            [
                'image' => 'majonez.jpg',
                'name' => 'Majonez',
                'quantity' => '700',
                'quantity_type' => 'ml',
                'status' => 1
            ],
            [
                'image' => 'chrzan.png',
                'name' => 'Chrzan',
                'quantity' => '180',
                'quantity_type' => 'g',
                'status' => 1
            ],
            [
                'image' => 'ocet.png',
                'name' => 'Ocet',
                'quantity' => '500',
                'quantity_type' => 'ml',
                'status' => 1
            ],
            [
                'image' => 'sol.jpg',
                'name' => 'Sól',
                'quantity' => '1',
                'quantity_type' => 'kg',
                'status' => 1
            ],
            [
                'image' => 'cukier.png',
                'name' => 'Cukier',
                'quantity' => '1',
                'quantity_type' => 'kg',
                'status' => 1
            ],
            [
                'image' => 'paprykaslodka.jpg',
                'name' => 'Papryka słodka',
                'quantity' => '20',
                'quantity_type' => 'g',
                'status' => 1
            ],
            [
                'image' => 'paprykaostra.jpg',
                'name' => 'Papryka ostra',
                'quantity' => '20',
                'quantity_type' => 'g',
                'status' => 1
            ],
            [
                'image' => 'curry.jpg',
                'name' => 'Curry',
                'quantity' => '20',
                'quantity_type' => 'g',
                'status' => 1
            ],
            [
                'image' => 'oregano.jpg',
                'name' => 'Oregano',
                'quantity' => '8',
                'quantity_type' => 'g',
                'status' => 1
            ],
            [
                'image' => 'bazylia.jpg',
                'name' => 'Bazylia',
                'quantity' => '8',
                'quantity_type' => 'g',
                'status' => 1
            ],
            [
                'image' => 'liscielaurowe.jpg',
                'name' => 'Liście laurowe',
                'quantity' => '6',
                'quantity_type' => 'g',
                'status' => 1
            ],
            [
                'image' => 'zieleangielski.png',
                'name' => 'Ziele angielskie',
                'quantity' => '15',
                'quantity_type' => 'g',
                'status' => 1
            ],
            [
                'image' => 'majeranek.jpg',
                'name' => 'Majeranek',
                'quantity' => '20',
                'quantity_type' => 'g',
                'status' => 1
            ],
            [
                'image' => 'drozdzesuszone.jpg',
                'name' => 'Drożdże szuszone',
                'quantity' => '7',
                'quantity_type' => 'g',
                'status' => 1
            ],
            [
                'image' => 'salata.jpg',
                'name' => 'Sałata',
                'quantity' => '1',
                'quantity_type' => 'szt',
                'status' => 1
            ],
            [
                'image' => 'wodagazowana.png',
                'name' => 'Woda gazowana',
                'quantity' => '1.5',
                'quantity_type' => 'l',
                'status' => 1
            ],
            [
                'image' => 'wodaniegazowana.jpg',
                'name' => 'Woda niegazowana',
                'quantity' => '1.5',
                'quantity_type' => 'l',
                'status' => 1
            ],
            [
                'image' => 'sokpomaranczowy.jpg',
                'name' => 'Sok pomarańczowy',
                'quantity' => '1',
                'quantity_type' => 'l',
                'status' => 1
            ],
            [
                'image' => 'sokjablkowy.png',
                'name' => 'Sok jabłkowy',
                'quantity' => '1',
                'quantity_type' => 'l',
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


