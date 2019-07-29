<?php

/* @var $factory \Illuminate\Database\Eloquent\Factory */

use App\Article;
use Faker\Generator as Faker;

$factory->define(Article::class, function (Faker $faker) {
    return [
        'author_id' => rand(1, 1000),
        'title' => $faker->sentence(rand(5, 10)),
        'body' => $faker->text(150),
    ];
});