<?php

namespace Database\Seeders;

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

        $user = $this->setHeader("Seeding Regular Users")
            ->setAmount(5)
            ->seedModel(User::class, function ($user) {
                $user->save();
            });
    }
}
