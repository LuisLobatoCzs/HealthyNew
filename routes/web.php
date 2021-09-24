<?php

use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\Auth;

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

Route::get('/nosotros', function () {
    return view('nosotros');
});

Route::get('/usuarios', function () {
    return view('usuarios');
});

Route::get('/especialista', function () {
    return view('especialista');
});

Route::group(['prefix' => '/seguridad'], function() {
    Route::get('/', function () { return view('seguridad'); });
    Route::get('/usuario', function () { return view('seguridadUsuario'); });
    Route::get('/especialista', function () { return view('seguridadEspecialista'); });
});

Route::get('/ayuda', function () {
    return view('ayuda');
});

Route::get('/registro-usuario', function () {
    return view('rusuario');
});
Route::get('/registro-especialista', function () {
    return view('respecialista');
});

Route::get('/perfil-usuario', function () {
    return view('perfilUsuario');
})->name('userhome');;

Route::get('/perfil-especialista', function () {
    return view('perfilEspecialista');
});

Route::post('/registrar-usuario', "NewController@registroUsuario");

Route::middleware(['auth:sanctum', 'verified'])->get('/dashboard', function () {
    return view('dashboard');
})->name('dashboard');

Auth::routes();

Route::get('/home', 'HomeController@index')->name('home');
