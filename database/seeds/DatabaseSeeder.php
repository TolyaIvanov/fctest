<?php

use Illuminate\Database\Seeder;
use App\Article;
use App\Comment;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        factory(App\User::class, 100000)->create();
        factory(App\Article::class, 15000)->create();
        factory(App\Comment::class, 50000)->create();
    }
}
