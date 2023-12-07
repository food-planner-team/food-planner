<?php

namespace Database\Seeders;

use App\Enum\RecipeStatusEnum;
use App\Factories\ImageFactory;
use App\Models\Image;
use App\Models\Recipe;
use App\Models\User;
use Illuminate\Http\UploadedFile;
use Illuminate\Support\Facades\File;
use Illuminate\Support\Arr;
use Illuminate\Support\Facades\Storage;
use Ramsey\Uuid\Uuid;

class RecipeSeeder extends ModelSeeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $recipesData = [

            [
                'name' => 'Owsianka pieczona',
                'description' => 'Owsianka pieczona',
                'preparation' => 'Banana rozgniatamy i bardzo dokładnie mieszamy z płatkami owsianym w naczyniu żaroodpornym. Dodajemy pokrojoną w kosteczkę gruszkę i resztę dodatków wedle uznania. Mleko zagotowujemy i zalewamy nim wcześniej przygotowaną masę. Całość wkładamy do piekarnika rozgrzanego do 180 stopni/termoobieg na 15-20 min. Wierzch można posypać świeżymi owocami i orzechami. Smacznego',
                'image' => 'pieczona-owsianka.jpg'
            ],
            [
                'name' => 'Zupa ogórkowa',
                'description' => 'Zupa ogórkowa',
                'preparation' => 'Cebule kroimy w kostkę i podsmażamy na maśle w garnku docelowym. Do garnka dodajemy wodę, warzywa starte na tarce, pierś z kurczaka pokrojona na 1cm kostkę, ziemniaki pokrojone na kawałki oraz przyprawy. Gotujemy pod przykryciem 20 minut. Następnie dodajemy ogórki kiszone starte na tarce oraz śmietanę i gotujemy przez 15 minut.  Przepis na około 8 porcji. Smacznego ',
                'image' => 'ogorkowa.png'
            ],
            [
                'name' => 'Kurczak z ryżem',
                'description' => 'Kurczak z ryżem',
                'preparation' => 'Cebulę podsmażamy na oleju, dodajemy kurczaka pokrojonego na 1cm kostkę. Gdy kurczak będzie zarumieniony, dodajemy na patelnię warzywa chińskie. Gdy warzywa zmiękną, dodajemy przecier pomidorowy oraz doprawiamy do smaku przyprawami. W między czasie gotujemy ryż w osolonej wodzie. Przepis na około  4 porcje.  Smacznego',
                'image' => 'kurzczak_z_ryzem.jpg'
            ],
            [
                'name' => 'Makaron z pomidorkami koktajlowymi',
                'description' => 'Makaron z pomidorkami koktajlowymi',
                'preparation' => 'Do naczynia żaroodpornego wsypujemy pomidorki koktajlowe, czosnek, oliwę i przyprawy wszystko dokładnie ze sobą mieszamy. Na środku naczynia robimy miejsce na kostkę sera i tam ją umieszczamy. Naczynie wkładamy do piekarnika nagrzanego do 180 stopni/termoobieg na 30 minut. W miedzy czasie gotujemy makaron z solą i olejem. Po 30 minutach wyciągamy naczynie z piekarnika widelcem rozgniatamy pomidorki z serem i dokładnie mieszamy do powstania konsystencji sosu. Dodajemy makaron wcześniej ugotowany i mieszamy wszystko razem. Przepis na około 6 porcji. Smacznego',
                'image' => 'makaron_z_pomidorkami_koktajlowymi.jpg'
            ],

            [
                'name' => 'Naleśniki ',
                'description' => 'Naleśniki',
                'preparation' => 'Wszystkie składniki wsypujemy do miski i łączymy za pomocą miksera lub rózgi kuchennej. Ciasto po zmiksowaniu najlepiej odstawić do lodówki na około 30 min aby zgęstniało, jednak nie jest to konieczne. Naleśniki smażymy na oleju i konsumujemy z wybranymi dodatkami. Przepis na około 15 sztuk naleśników. Smacznego ',
                'image' => 'Nalesniki.jpg'
            ],

            [
                'name' => 'Tortille z kurczakiem',
                'description' => 'Tortille z kurczakiem',
                'preparation' => 'Kurczaka pokrojonego w kostkę doprawiamy przyprawami oraz olejem i odstawiamy na 30 min do lodówki. W między czasie kroimy warzywa świeże, konserwowe oraz sałatę i łączymy ze sobą w misce, można doprawić solą i pieprzem jednak należy pamiętać, że wtedy warzywa puszczą sok co utrudni zawijanie tortilli. Kurczaka przekładamy na patelnie i smażymy do momentu zarumienienia. Tortille nacinamy od środka tak aby łatwo można było złożyć ją w trójkąt. Na 1/3 wykładamy kurczaka i na 1/3 warzywa pozostałym kawałkiem posmarowanym wybranymi sosami zabezpieczamy kurczaka aby wszystko się dobrze trzymało. Tak złożone trójkąty najlepiej włożyć do tostera z nakładką przeznaczoną do mięsa i podgrzać/ można też zapiec w piekarniku. Przepis na około 5 porcji. Smacznego',
                'image' => 'tortille_z_kurczakiem.jpg'
            ],

            [
                'name' => 'Szakszuka',
                'description' => 'Szakszuka',
                'preparation' => 'Na patelnie dajemy pomidorki z puszki podsmażamy z vegetą, czosnkiem i oregano do momentu odparowania wody. Robimy 4 miejsca na jajka, wbijmy jajka na patelnie doprawiamy je solą i pod przykryciem smażymy  około 2 min. W miedzy czasie bagietkę kroimy na kawałki i podpiekamy w piekarniku na chrupiąco. Przepis na dwie porcje. Smacznego ',
                'image' => 'Szakszuka.jpg'
            ],

            [
                'name' => 'Omlet na słodko',
                'description' => 'Omlet na słodko',
                'preparation' => 'Banana rozgniatamy widelcem i mieszamy z resztą składników również za pomocą widelca. Masę dzielimy na pół. Na patelni rozgrzanej z połową oleju smażymy pierwszy omlet, z drugą  połową robimy dokładnie to samo. Omlet smarujemy dodatkami według uznania. Smacznego',
                'image' => 'omlet_na_slodko.jpeg'
            ],
            [
                'name' => 'Gołąbki be zawijania ',
                'description' => 'Gołąbki be zawijania',
                'preparation' => 'Cebulę kroje w kostkę i na patelni z olejem przesmażam aż się zeszkli. Do miski dodaje wszystkie pozostałe składniki na kotleciki wraz z przesmażoną już cebula. Dokładnie mieszam. Z tak przygotowanego mięsa formuję kotleciki, które obtaczam w bułce tartej. Tak przygotowane kotleciki robię na parze lub przesmażam na oleju, po to aby nie rozpadły mi się w pieczeniu. W miedzy czasie przygotowuję sos. Wszystkie składniki poza śmietaną wrzucam do garnka zagotowuję. Gotuję 5 minut i dodaję śmietankę. Przesmażone lub zrobione na parze kotleciki wkładam do naczynia żaroodpornego i zalewam sosem. Naczynie wkładam do piekarnika nagrzanego do 180 stopni/termoobieg na 45 min. Przepis na około 15 kotlecików. Smacznego',
                'image' => 'golabki_bez_zawijania.jpg'

            ],
            [
                'name' => 'Kotleciki ze szpinakiem',
                'description' => 'Kotleciki ze szpinakiem',
                'preparation' => 'Kaszę gotuje z solą i pozostawiam do wystudzenia. Na patelni przesmażam mrożony szpinak z czosnkiem do momentu odparowania wody i pozostawiam do wystudzenia. Wszystkie składniki mieszam ze sobą i formuję kotleciki. Następnie obtaczam je w bułce tartej i smażę na oleju. Smacznego',
                'image' => 'golabki_bez_zawijania.jpg'
            ],
            [
                'name' => 'Barszczyk czerwony zabielany',
                'description' => 'Barszczyk czerwony zabielany',
                'preparation' => 'Obrane buraki kroje w plasterki i zalewam wodą, gotuję na wolnym ogniu do momentu aż buraki będą miękkie. Mąkę mieszam z 1/4 szklanki wody do uzyskania gładkiej masy bez grudek. Dodaję do gotujących się buraków wraz z barszczem. Gotuję przez 7 min i dodaję przyprawy. W miedzy czasie gotuję ziemniaki z solą (łyżka) i na patelni przesmażam kawałki słoninki (bardzo cieniutkie) z cebulką pokrojoną w kosteczkę. Dzielę na pół przesmażoną cebulkę połowę dodaję do barszczyku a połowę do odcedzonych ziemniaków. Ziemniaki z cebulką ubijam z odrobiną mleka. Podaję barszczyk z ziemniaczkami. Smacznego ' .
                    'Uwaga NIE WOLNO solić buraków wcześniej gdyż stracą kolor.',
                'image' => 'barszcz-czerwony-zabielany.jpg'
            ],
        ];

        $users = User::all()->pluck('id');

        $this->useData($recipesData)
            ->setHeader("Seeding recipes")
            ->setAmount(count($recipesData))
            ->seedModel(Recipe::class, function ($recipe) use ($users)
            {
                $recipe->status = RecipeStatusEnum::ACCEPTED;
                $recipe->user_id = $users->random();
                $recipe->preparation_time = rand(5, 10);
                $recipe->kcal = rand(100, 1000);
                $path = __DIR__ . '\data\seed\images\\' . $recipe->image;
                unset($recipe->image);
                $recipe->save();
                if (file_exists($path)) {
                    $file = new UploadedFile($path, $recipe->id, mime_content_type($path), null, false, true);
                    $image = new ImageFactory('images/recipes/', $file, $recipe, 'public');
                    $image->create();
                };
            });
    }
}
