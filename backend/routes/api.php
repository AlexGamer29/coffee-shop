<?php

use App\Http\Controllers\PassportAuthController;
use App\Http\Controllers\CategoryController;

use App\Http\Controllers\Controller;
use App\Http\Controllers\ProductsController;
use App\Http\Controllers\SubCategoryController;
use App\Models\SubCategory;
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

    // Category
    // Get all categories
    Route::get('/category', [CategoryController::class, 'index']);
    // Create category
    Route::post('/category', [CategoryController::class, 'store']);
    // Get category by id
    Route::get('/category/{id}', [CategoryController::class, 'show']);
    // Update category
    Route::patch('/category/{id}', [CategoryController::class, 'update']);
    // Delete category
    Route::delete('/category/{id}', [CategoryController::class, 'destroy']);

    // Sub-category
    // Get all sub-categories
    Route::get('/sub-category', [SubCategoryController::class, 'index']);
    // Create sub-category
    Route::post('/sub-category', [SubCategoryController::class, 'store']);
    // Get sub-category by id
    Route::get('/sub-category/{id}', [SubCategoryController::class, 'show']);
    // Update sub-category
    Route::patch('/sub-category/{id}', [SubCategoryController::class, 'update']);
    // Delete sub-category
    Route::delete('/sub-category/{id}', [SubCategoryController::class, 'destroy']);

    // Products
    // Get all products
    Route::get('/products', [ProductsController::class, 'index']);
    // Create product
    Route::post('/products', [ProductsController::class, 'store']);
    // Get product by id
    Route::get('/products/{id}', [ProductsController::class, 'show']);
    // Update product
    Route::patch('/products/{id}', [ProductsController::class, 'update']);
    // Delete product
    Route::delete('/products/{id}', [ProductsController::class, 'destroy']);
});
