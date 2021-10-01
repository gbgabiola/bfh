<?php

use App\Http\Controllers\AdminproductController;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\UserAuth;
use App\Http\Controllers\api\ProductController;
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

// home page
Route::get('/', function () {
    return view('welcome');
});
// feature page
Route::get('/features', function () {
    return view('welcome');
});
// contact page
Route::get('/contact', function () {
    return view('welcome');
});
// product category page
Route::get('/products/{product}', function () {
    return view('welcome');
});
// product specific
Route::get('/products/{product}/{id}', function () {
    return view('welcome');
});
Route::get('edit', function () {
    return view('admin/edit');
});
//login page
Route::get('/login', [UserAuth::class, 'login'])->middleware('alreadyLoggedIn');
//register page
Route::get('/register', [UserAuth::class, 'register'])->middleware('alreadyLoggedIn');
//creating user
Route::post('/register', [UserAuth::class, 'registerUser'])->name('register-user');
//logging in
Route::post('/login-user', [UserAuth::class, 'loginUser'])->name('login-user');
//after logging in it will redirect you to this dashboard
Route::get('/dashboard', [UserAuth::class, 'dashboard'])->middleware('isLoggedIn');
//Product Table
// Route::get('/products',[UserAuth::class,'products'])->middleware('isLoggedIn');
Route::resource("products", AdminproductController::class)->middleware('isLoggedIn');
//Add product page
Route::get('/addproducts',[UserAuth::class,'addproducts'])->middleware('isLoggedIn');
//Add product POST
Route::post('/addproducts',[ProductController::class,'addProducts'])->middleware('isLoggedIn')->name('add-products');
//Categories page
Route::get('/categories',[UserAuth::class,'categories'])->middleware('isLoggedIn');
//Categories page
Route::get('/customers',[UserAuth::class,'customers'])->middleware('isLoggedIn');
//logout function
Route::get('/logout', [UserAuth::class, 'logout']);
