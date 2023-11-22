<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ProfileController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

// ruta para obtener toda la data
Route::get('profile', [ProfileController::class, 'getData']);
Route::apiResource('profile', ProfileController::class)->except('index');

Route::put('profile/{profileId}/framework/{frameworkId}', [ProfileController::class, 'updateFramework']);
Route::delete('profile/{profileId}/framework/{frameworkId}', [ProfileController::class, 'deleteFramework']);

