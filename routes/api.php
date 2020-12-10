<?php

use App\Http\Controllers\ClienteController;
use App\Http\Controllers\InsumoController;
use App\Http\Controllers\ProductoController;
use App\Http\Controllers\ProveedorController;
use App\Http\Controllers\UserController;
use App\Http\Controllers\VentaController;
use App\Http\Controllers\CompraController;
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
Route::middleware('auth:sanctum')->group(function () {
    Route::get('/clientes', [ClienteController::class, 'listar']);
    Route::post('/clientes', [ClienteController::class, 'crear']);
    Route::patch('/clientes/{id}', [ClienteController::class, 'update']);
    //Route::resource('productos', ProductoController::class, ['only' => ['index', 'store']]);
});
Route::get('/compras', [CompraController::class, 'index']);
Route::post('/compras', [CompraController::class, 'store']);
Route::get('/ventas', [VentaController::class, 'index']);
Route::post('/ventas', [VentaController::class, 'store']);
Route::get('/proveedores', [ProveedorController::class, 'index']);
Route::post('/proveedores', [ProveedorController::class, 'store']);
Route::patch('/proveedores/{id}', [ProveedorController::class, 'update']);

Route::resource('productos', ProductoController::class, ['only' => ['index', 'store']]);
Route::resource('insumos', InsumoController::class, ['only' => ['index', 'store']]);
Route::patch('productos/{id}', [ProductoController::class, 'edit']);
Route::get('insumos/{id}', [InsumoController::class, 'find']);
Route::patch('insumos/{id}', [InsumoController::class, 'update']);
Route::post('/login', [UserController::class, 'login']);
Route::post('/register', [UserController::class, 'register']);
Route::get('/logout', [UserController::class, 'logout']);