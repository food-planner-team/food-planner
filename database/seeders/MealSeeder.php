<?php

namespace Database\Seeders;

use App\Models\Meal;

class MealSeeder extends ModelSeeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $mealData = [
            [
                'name' => 'Śniadanie',
                'order' => '1',
                ],
                [
                'name' => 'II śniadanie',
                'order' => '2',
                ],
                [
                'name' => 'Obiad',
                'order' => '3',
                ],
                [
                'name' => 'Podwieczorek',
                'order' => '4',
                ],
                [
                'name' => 'Kolacja',
                'order' => '5',
                ]
  
        ];
       
        $this -> useData($mealData)
            ->setHeader("Seeding meals")
            ->setAmount(count($mealData))

            ->seedModel(Meal::class,function($meal){
                $meal -> save();
            });
    }
}
