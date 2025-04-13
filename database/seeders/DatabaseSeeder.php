<?php

namespace Database\Seeders;

use App\Models\Menu;
use App\Models\User;
// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Database\Factories\MenuFactory;
use Illuminate\Database\Eloquent\Factories\Sequence;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // User::factory(10)->create();

        User::factory()->create([
            'name' => 'Test User',
            'email' => 'test@example.com',
        ]);

        Menu::factory()
            ->count(10)
            ->sequence(fn(Sequence $sequence) => ['position' => $sequence->index + 1])
            ->create();
    }
}
