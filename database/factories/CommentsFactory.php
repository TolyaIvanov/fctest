<?php

/* @var $factory \Illuminate\Database\Eloquent\Factory */

use App\Comment;
use Faker\Generator as Faker;

$factory->define(Comment::class, function (Faker $faker) {
    return [
        'author_id' => rand(1, 100000),
        'article_id' => rand(1, 10000),
        'body' => $faker->text(rand(10, 30)),
    ];
});
