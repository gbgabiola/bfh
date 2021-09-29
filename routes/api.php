<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\CasketController;
use App\Http\Controllers\Api\FeatureController;
use App\Http\Controllers\Api\FlowerController;
use App\Http\Controllers\Api\MessageController;
use App\Http\Controllers\Api\ProductController;
use Symfony\Component\Mime\MessageConverter;

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

Route::resource('feature', FeatureController::class);
Route::resource('casket', CasketController::class);
Route::resource('flower', FlowerController::class);
Route::resource('product', ProductController::class);
Route::resource('message', MessageController::class);
Route::get('/', [ProductController::class, 'tblProducts']);