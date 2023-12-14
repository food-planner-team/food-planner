<?php

use App\Enum\UserRoleEnum;
use App\Http\Controllers\v1\Auth\LoginController;
use App\Http\Controllers\v1\Auth\LogoutController;
use App\Http\Controllers\v1\Auth\RegisterController;
use App\Http\Controllers\v1\Auth\ResetPasswordController;
use App\Http\Controllers\v1\Auth\SendResetPasswordController;
use App\Http\Controllers\v1\GenerateRecipesPlanController;
use App\Http\Controllers\v1\ProductsController;
use App\Http\Controllers\v1\ProductUpdateStatusController;
use App\Http\Controllers\v1\RecipesController;
use App\Http\Controllers\v1\RecipeUpdateStatusController;
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

Route::post('/login', LoginController::class);
Route::post('/register', RegisterController::class);
Route::post('/send-reset-link', SendResetPasswordController::class);
Route::post('/reset', ResetPasswordController::class);

Route::middleware(['auth:sanctum'])->group(function () {
    Route::get('/user/pdf-recipes', GenerateRecipesPlanController::class);
    Route::get('/user', function (Request $request) {
        return $request->user();
    });
    Route::post('/logout', LogoutController::class);
    Route::resource('/user/recipes', UserRecipesController::class)->except(['update']);  //@TODO ??
    Route::resource('/products', ProductsController::class)->except(['update']);
    Route::resource('/recipes', RecipesController::class)->except(['update']);
});
Route::middleware(['auth:sanctum', 'role:admin,employee'])->group(function () {
    Route::resource('/products', ProductsController::class)->only(['update']);
    Route::resource('/recipes', RecipesController::class)->only(['update']);
    Route::post("/recipes/{recipe}/update-status", RecipeUpdateStatusController::class);
    Route::post("/products/{product}/update-status", ProductUpdateStatusController::class);
});
Route::middleware(['auth:sanctum', 'role:admin'])->group(function () {
    Route::post("/users/{user}/update-role", ProductUpdateStatusController::class);
});

