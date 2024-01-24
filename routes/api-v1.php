<?php

use App\Enum\UserRoleEnum;
use App\Http\Controllers\v1\Auth\LoginController;
use App\Http\Controllers\v1\Auth\LogoutController;
use App\Http\Controllers\v1\Auth\RegisterController;
use App\Http\Controllers\v1\Auth\ResetPasswordController;
use App\Http\Controllers\v1\Auth\SendResetPasswordController;
use App\Http\Controllers\v1\GenerateRecipesPlanController;
use App\Http\Controllers\v1\GenerateShoppingListController;
use App\Http\Controllers\v1\NotificationsController;
use App\Http\Controllers\v1\NotificationsReadController;
use App\Http\Controllers\v1\ProductsController;
use App\Http\Controllers\v1\ProductUpdateStatusController;
use App\Http\Controllers\v1\RecipesController;
use App\Http\Controllers\v1\RecipeUpdateStatusController;
use App\Http\Controllers\v1\StatisticsController;
use App\Http\Controllers\v1\UserRecipesController;
use App\Http\Controllers\v1\UsersController;
use App\Http\Controllers\v1\UserUpdateRoleController;
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
    Route::get('/user/shopping-list', GenerateShoppingListController::class);
    Route::get('/user', function (Request $request) {
        return $request->user();
    });
    Route::get('/notifications', [NotificationsController::class, 'index']);
    Route::post('/notifications/read', NotificationsReadController::class);
    Route::post('/logout', LogoutController::class);
    Route::resource('/users/recipes', UserRecipesController::class)->except(['update']);
    Route::get('/users/{user}', [UsersController::class, 'show']);
    Route::post('/users/{user}', [UsersController::class, 'update']);
    Route::resource('/products', ProductsController::class)->except(['update']);
    Route::resource('/recipes', RecipesController::class)->except(['update']);
    Route::post('/recipes/{recipe}', [RecipesController::class, 'update']);
    Route::post('/products/{product}', [ProductsController::class, 'update']);
    Route::get('/statistics', StatisticsController::class);
    Route::middleware(['role:admin,employee'])->group(function () {
        Route::resource('/users', UsersController::class)->only(['index', 'destroy']);
        Route::post("/recipes/{recipe}/statuses", RecipeUpdateStatusController::class);
        Route::post("/products/{product}/statuses", ProductUpdateStatusController::class);
    });
    Route::middleware(['role:admin'])->group(function () {
        Route::post("/users/{user}/roles", UserUpdateRoleController::class);
    });
});

