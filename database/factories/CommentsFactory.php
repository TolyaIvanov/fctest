<?php

/* @var $factory \Illuminate\Database\Eloquent\Factory */

use App\Comment;
use Faker\Generator as Faker;

$factory->define(Comment::class, function (Faker $faker) {
    return [
        'author_id' => rand(1, 1000),
        'article_id' => rand(1, 50),
        'body' => $faker->text(rand(10, 30)),
    ];
});
