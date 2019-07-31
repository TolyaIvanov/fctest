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
//        factory(App\User::class, 5)->create()->each(function ($user){
//            $user->articles()->saveMany(factory(App\Article::class, 1)->make());
//            $user->comments()->saveMany(factory(App\Comment::class, 2)->make());
//        });
        factory(App\User::class, 500)->create();
        factory(App\Article::class, 50)->create();
        factory(App\Comment::class, 750)->create();

//        for ($i = 0; $i < 10; $i++) {
//            factory(App\User::class, 10)->create()->each(function ($user) use ($i) {
//                $user->articles()->saveMany(factory(App\Article::class, 2)->make());
//                $user->comments()->saveMany(factory(App\Comment::class, 4)->make());
//            });
//        }
    }
}
