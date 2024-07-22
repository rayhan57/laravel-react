<?php

namespace Database\Seeders;

use App\Models\Category;
use App\Models\Post;
use App\Models\User;
// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder {
    /**
     * Seed the application's database.
     */
    public function run(): void {
        $this->call([UserSeeder::class, CategorySeeder::class]);

        $users = User::all();
        $categories = Category::all();

        Post::factory(100)
            ->recycle([$users, $categories])
            ->create();
    }
}
