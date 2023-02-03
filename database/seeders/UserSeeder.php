<?php

namespace Database\Seeders;

use App\Models\Recipe;
use App\Models\User;

class
UserSeeder extends ModelSeeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        $adminsData = [
            1 => [
                'name' => 'test',
                'email' => 'test@test.com',
                'password' => bcrypt('123456')
            ],
            4 => [
                'name' => 'test4',
                'email' => 'test4@test.com',
                'password' => bcrypt('654321')
            ],
        ];

        $admins = $this->useData($adminsData)
            ->setAmount(count($adminsData))
            ->setHeader("Seeding Admins")
            ->seedModel(User::class, function ($user) {
                $user->admin = 1;
                $user->save();


            });
        foreach ($admins as $admin) {
            $today = new \DateTime('today');
            for ($i = 1; $i <= 7; $i++) {
                for ($d = 1; $d < 5; $d++) {

//                    $admin->recipes()->syncWithoutDetaching([Recipe::all()->random()->id => ['order' => $d, 'date' => $today]]);
                    $admin->recipes()->attach([$d => ['order' => $d, 'date' => $today]]);
                }
                $today->modify("+1 day");
            }
        }
//        dd($count);

        $user = $this->setHeader("Seeding Regular Users")
            ->setAmount(5)
            ->seedModel(User::class, function ($user) {
                $user->save();
            });
    }
}
