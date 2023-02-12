<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\User;
use Illuminate\Support\Facades\Hash;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        User::insert([
            [
                'name' => 'sena',
                'email' => 'sena@example.com',
                'password' => Hash::make('pass0000'),
            ],
            [
                'name' => 'chocolat',
                'email' => 'chocolat@example.com',
                'password' => Hash::make('pass0000'),
            ],
            [
                'name' => 'cacao',
                'email' => 'cacao@example.com',
                'password' => Hash::make('pass0000'),
            ],
        ]);
    }
}
