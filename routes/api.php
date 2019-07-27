<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::group(['prefix' => 'get/'], function () {
    Route::group(['prefix' => 'all/'], function () {
        Route::get('users', 'api\UsersController@all');
        Route::get('comments', 'api\CommentsController@all');
        Route::get('articles', 'api\ArticlesController@all');

    });

    Route::group(['prefix' => 'top/'], function () {
        Route::get('users', 'api\UsersController@top');
        Route::get('comments', 'api\CommentsController@last');
        Route::get('articles', 'api\ArticlesController@top');
    });
});
