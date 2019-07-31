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

Route::get('author/{id}', 'api\UsersController@get');
Route::get('article/{id}', 'api\ArticlesController@get');
Route::post('comments/add', 'api\CommentsController@add');

Route::group(['prefix' => 'get/'], function () {
    Route::group(['prefix' => 'top/'], function () {
        Route::get('users', 'api\UsersController@top');
        Route::get('comments', 'api\CommentsController@last');
        Route::get('articles', 'api\ArticlesController@top');
    });

    Route::get('articles', 'api\ArticlesController@last');
});
