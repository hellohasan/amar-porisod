<?php

use Illuminate\Support\Facades\Route;

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
    return redirect('/login');

    return view('welcome');
});

/* Auth::routes(); */

Route::get('/home', [App\Http\Controllers\HomeController::class, 'index'])->name('home');

Route::get('/backend', function () {
    return view('layouts.master');
});

Route::get('{any}', function () {
    return view('layouts.master');
})->where('any', '[\/\w\.-]*');
