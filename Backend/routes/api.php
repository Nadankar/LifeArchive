<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\MemoryController;
use App\Http\Controllers\MemoryFileController;
use App\Http\Controllers\MemoryLinkController;
use App\Http\Controllers\MemoryNoteController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;


Route::post('/register', [AuthController::class, 'register']);
Route::post('/login', [AuthController::class, 'login']);


Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');


//memory CRUD routes
Route::middleware('auth:sanctum')->group(function () {

    Route::post('/logout', [AuthController::class, 'logout']);

    Route::get('/memories', [MemoryController::class, 'index']);
    Route::post('/memories', [MemoryController::class, 'store']);
    Route::get('/memories/{id}', [MemoryController::class, 'show']);
    Route::put('/memories/{id}', [MemoryController::class, 'update']);
    Route::delete('/memories/{id}', [MemoryController::class, 'destroy']);

    //memory files
    Route::post('/memories/{memoryId}/files', [MemoryFileController::class, 'store']);
    Route::get('/memories/{memoryId}/files', [MemoryFileController::class, 'index']);
    Route::put('/memories/{memoryId}/files/{fileId}', [MemoryFileController::class, 'update']);
    Route::delete('/memories/{memoryId}/files/{fileId}', [MemoryFileController::class, 'destroy']);

    //memory links
    Route::post('memories/{memoryId}/links', [MemoryLinkController::class, 'store']);
    Route::get('memories/{memoryId}/links', [MemoryLinkController::class, 'index']);
    Route::put('/memories/{memoryId}/links/{linkId}', [MemoryLinkController::class, 'update']);
    Route::delete('/memories/{memoryId}/links/{linkId}', [MemoryLinkController::class, 'destroy']);

    //memory notes
    Route::post('/memories/{memoryId}/notes', [MemoryNoteController::class, 'store']);
    Route::get('/memories/{memoryId}/notes', [MemoryNoteController::class, 'index']);
    Route::put('/memories/{memoryId}/notes/{noteId}', [MemoryNoteController::class, 'update']);
    Route::delete('/memories/{memoryId}/notes/{noteId}', [MemoryNoteController::class, 'destroy']);
});
