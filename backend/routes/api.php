<?php

use App\Http\Controllers\PassportAuthController;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

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

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});


Route::get('/cat', [Controller::class, 'getCategory']);
Route::get('/pro', [Controller::class, 'getProductInCategory']);

// Route::group(['middleware' => ['cors', 'json.response']], function () {
//     Route::post('/login', 'ApiAuthController@login')->namespace('App\Http\Controllers')->name('login.api');
//     Route::post('/register', 'ApiAuthController@register')->namespace('App\Http\Controllers')->name('register.api');
// });

// Route::middleware('auth:api')->group(function () {
//     Route::post('/logout', 'ApiAuthController@logout')->name('logout.api');
// });


Route::group(['middleware' => ['cors', 'json.response']], function () {
    Route::post('/register', [PassportAuthController::class, 'register']);
    Route::post('/login', [PassportAuthController::class, 'login']);
});

Route::middleware('auth:api')->group(function () {
    Route::post('/logout', [PassportAuthController::class, 'logout']);
});
