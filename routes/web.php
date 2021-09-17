<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\UserAuth;
use App\Models\User;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});

//login page
Route::get('/login',[UserAuth::class,'login'])->middleware('alreadyLoggedIn');
//register page
Route::get('/register',[UserAuth::class,'register'])->middleware('alreadyLoggedIn');
//creating user
Route::post('/register',[UserAuth::class,'registerUser'])->name('register-user');
//logging in
Route::post('/login-user',[UserAuth::class,'loginUser'])->name('login-user');
//after logging in it will redirect you to this dashboard
Route::get('/dashboard',[UserAuth::class,'dashboard'])->middleware('isLoggedIn');
//logout function
Route::get('/logout',[UserAuth::class,'logout']);