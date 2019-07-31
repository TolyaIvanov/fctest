<?php

/* @var $factory \Illuminate\Database\Eloquent\Factory */

use App\Article;
use Faker\Generator as Faker;

$factory->define(Article::class, function (Faker $faker) {
    return [
        'author_id' => rand(1, 100000),
        'title' => $faker->sentence(rand(1, 3)),
        'body' => $faker->sentence(rand(10, 300)),
    ];
});
