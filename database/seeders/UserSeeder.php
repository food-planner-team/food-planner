<?php

namespace Database\Seeders;

use App\Models\Recipe;
use App\Models\User;

class UserSeeder extends ModelSeeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        $users = [
            1 => [
                'name' => 'Użytkownik',
                'email' => 'user@test.com',
                'role' => 0,
                'password' => bcrypt('123456')
            ],
            2 => [
                'name' => 'Pracownik',
                'email' => 'employee@test.com',
                'role' => 1,
                'password' => bcrypt('123456')
            ],
            3 => [
                'name' => 'Admin',
                'email' => 'admin@test.com',
                'role' => 2,
                'password' => bcrypt('123456')
            ]
        ];

        $usersData = $this->useData($users)
            ->setAmount(count($users))
            ->setHeader("Seeding Admins")
            ->seedModel(User::class, function ($user) {
                $user->save();
            });
        foreach ($usersData as $user) {
            $today = new \DateTime('today');
            for ($i = 1; $i <= 7; $i++) {
                for ($d = 1; $d < 5; $d++) {
                    $user->recipes()->attach([$d => ['order' => $d, 'date' => $today]]);
                }
                $today->modify("+1 day");
            }
        }
    }
}
