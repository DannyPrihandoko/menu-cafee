<?php

use App\Http\Controllers\MenuController;
use App\Http\Controllers\MenuReorderingController;
use App\Http\Resources\MenuResource;
use App\Models\Menu;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    $menus = MenuResource::collection(
        Menu::orderBy('position')->get()
    );

    return Inertia::render('home', ['menus' => $menus]);
})->name('home');

Route::middleware(['auth', 'verified'])->group(function () {
    Route::put('dashboard/menus/reorder', MenuReorderingController::class)->name('menus.reorder');
    Route::resource('dashboard/menus', MenuController::class);
});

require __DIR__ . '/settings.php';
require __DIR__ . '/auth.php';
