<?php

use App\Http\Controllers\v1\Auth\LoginController;
use App\Http\Controllers\v1\Auth\LogoutController;
use App\Http\Controllers\v1\Auth\RegisterController;
use App\Http\Controllers\v1\MainProductsController;
use App\Http\Controllers\v1\ProductsController;
use App\Http\Controllers\v1\RecipesController;
use App\Http\Controllers\v1\UserRecipesController;
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




Route::middleware(['auth:sanctum'])->group(function () {
    Route::get('/user', function (Request $request) {
        return $request->user();
    });
    Route::resource('/recipes', RecipesController::class);
    Route::resource('/products', ProductsController::class)->only(['index']);
    Route::resource('/main-products', MainProductsController::class);
    Route::resource('/user/recipes', UserRecipesController::class)->only(['index', 'store']);

    Route::post('/logout', LogoutController::class);
});
Route::post('/login', LoginController::class);
Route::post('/register', RegisterController::class);
