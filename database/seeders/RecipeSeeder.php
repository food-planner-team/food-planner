<?php

namespace Database\Seeders;

use App\Models\Recipe;

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
                'name' => 'Kurczak z ryżem',
                'description' => 'Potrawa Kurczaka z ryżem',
            ],
            [
                'name' => 'WRAP ŚNIADANIOWY Z TORTILLI',
                'description' => 'Popularny w internecie przepis na śniadaniowy wrap z tortilli z awokado, boczkiem, omletem i tartym serem. TikTok Breakfast Tortilla',
            ],
            [
                'name' => 'MONKEY BREAD - MAŁPI CHLEBEK',
                'description' => 'Słodkie, klejące i mocno cynamonowe mini drożdżowe kulki do odrywania, popularne w USA, pieczone w formie na babkę, często z dodatkiem orzechów pekan. Można polać polewą karmelową lub lukrem.',
            ],
            [
                'name' => 'SAŁATKA KRABOWA - Z PALUSZKAMI KRABOWYMI SURIMI',
                'description' => 'Popularna sałatka krabowa z paluszkami krabowymi, z dodatkiem jajek, ogórka, ryżu oraz kukurydzy. Można dodać rzodkiewkę (ale niekoniecznie) oraz czerwoną cebulę.',
            ],
            [
                'name' => 'BURRITO BOWL Z MIELONYM INDYKIEM',
                'description' => 'Burrito Bowl - meksykańska miska smaku! To miseczka wypełniona składnikami na burrito: ryżem (najzdrowiej pełnoziarnistym - jak na zdjęciu), chudym mielonym mięsem, awokado, kukurydzą i fasolą. Do tego jogurt naturalny lub śmietana. Same najlepsze składniki, a wszystko już bez tortilli i ciężkich sosów, a zatem jeszcze bardziej fit ;-)',
            ],
            [
                'name' => 'RICE BOWL Z ŁOSOSIEM I SALSĄ MANGO',
                'description' => 'Danie z pieczonego w sezamie łososia, podawane w miseczce z dodatkiem ryżu oraz z salsą (surówką) z mango, ogórka i czerwonej cebuli.                ',
            ],
            [
                'name' => 'CIASTO MARLENKA',
                'description' => 'Ciasto Marlenka to pyszne miodowe ciasto (rodzaj miodownika) przekładane masą kajmakową. Idealne na Święta ale również na inne rodzinne okoliczności, gdyż jest dość efektowne, wysokie i podzielne. Można je zrobić z wyprzedzeniem 2 - 3 dniowym, gdyż blaty z czasem miękną i "dojrzewają", choć bardzo dobre jest również już na drugi dzień ;)',
            ],
            [
                'name' => 'SAŁATKA JARZYNOWA',
                'description' => 'Tradycyjna polska sałatka jarzynowa z majonezem, z ugotowanych w mundurkach jarzyn: marchewki, pietruszki i ziemniaków, z dodatkiem ugotowanych na twardo jajek, ogórka kiszonego, zielonego groszku i cebuli. Idealna na każde święta, uroczystości i spotkanie rodzinne.                ',
            ],
            [
                'name' => 'CARPACCIO Z BURAKA',
                'description' => 'Jak przygotować? Cienko pokrojone obrane (upieczone lub ugotowane) buraczki układamy na zakładkę na półmisku. Dodajemy rukolę, orzechy, ser i polewamy winegretem. Klasyczna wersja carpaccio zawiera płatki parmezanu, ale jeśli jesteście fanami sera koziego (roladka pleśniowa, nie twarogowa), to również można go tutaj wykorzystać.',
            ],
            [
                'name' => 'CIASTO PORZECZKOWIEC',
                'description' => 'Ciasto czekoladowe przełożone masą twarogową i dżemem porzeczkowym, przykryte bitą śmietaną',
            ],
            [
                'name' => 'POLĘDWICZKA Z ŻURAWINĄ',
                'description' => 'Niezawodny przepis na pyszne i proste do zrobienia danie z polędwiczki wieprzowej z dodatkiem żurawiny i puree z ziemniaków. W podany sposób można przygotować jednocześnie również więcej porcji mięsa np. na świąteczny obiad.',
            ],
            [
                'name' => 'ŚLEDZIE W OCCIE',
                'description' => 'Na Wigilię ale nie tylko! To podstawowy przepis jak zrobić śledzie wigilijne z cebulką.',
            ],
            [
                'name' => 'KOPYTKA ZAPIEKANE Z DYNIĄ, CHORIZO I CIECIERZYCĄ',
                'description' => 'Pyszna zapiekanka z kopytek lub włoskich kluseczek gnocchi z sosem pomidorowym i mozzarellą, z dodatkiem podsmażanego chorizo, ciecierzycy i dyni.                ',
            ],
            [
                'name' => 'TARTA Z JABŁKAMI',
                'description' => 'Tarta z jabłkami, udekorowana bitą śmietaną i owocami (można wykorzystać dowolne dostępne owoce, np. borówki, granata, figi, maliny, itp.)',
            ],
            [
                'name' => 'WŁOSKIE PIEROŻKI W SOSIE POMIDOROWYM',
                'description' => 'Do przepisu można wykorzystać dowolne gotowe ravioli, tortellini lub cappelletti ze sklepu (np. z ricottą i szpinakiem, z szynką, z grzybami, z chorizo i kurczakiem itp.)                ',
            ],
            [
                'name' => 'RAMEN Z ŁOSOSIEM',
                'description' => 'Szybki ramen domowy z pieczonym łososiem, szpinakiem i makaronem.',
            ],
            [
                'name' => 'MAKARON RYŻOWY Z KREWETKAMI',
                'description' => 'Makaron ryżowy smażony po azjatycku z krewetkami, warzywami, jajkiem i kiełkami fasoli mung.',
            ],
            [
                'name' => 'POLĘDWICZKA Z RYŻEM I SALSĄ MANGO',
                'description' => 'Rice Bowl z karmelizowaną polędwiczką wieprzową i pikantną salsą mango z ogórkiem i czerwoną cebulą.',
            ],
            [
                'name' => 'TARTA ZE ŚLIWKAMI                ',
                'description' => 'Inspirowane amerykańskim Plum Pie, ciasto kruche z nadzieniem śliwkowym ze świeżych śliwek z cukrem i cynamonem.                ',
            ],
            [
                'name' => 'SAŁATKA Z ARBUZEM I AWOKADO',
                'description' => 'Pyszna i orzeźwiająca sałatka z arbuzem i awokado, z czerwoną cebulą, ogórkiem, fetą i zielonym jabłkiem.',
            ],
            [
                'name' => 'TORTILLE Z CUKINII',
                'description' => 'Tortille z tartej cukinii pieczone w piekarniku, po upieczeniu zwijane z dodatkiem jajecznicy i wędzonego łososia. Można podawać również z innymi dodatkami jak np. szynka, tarty ser, gorgonzola itp.                ',
            ],
            [
                'name' => 'MATCHA BROWNIE                ',
                'description' => 'Pyszne, wilgotne, z chrupiącą skorupką! Zielone Matcha Brownie, z dodatkiem sproszkowanej zielonej herbaty matcha. Koniecznie do wypróbowania dla fanów matchy!                ',
            ],
        ];

        $this -> useData($recipesData)
            ->setHeader("Seeding recipes")
            ->setAmount(count($recipesData))
            ->seedModel(Recipe::class,function($recipe){
                $recipe -> save();
            });
    }
}
