<?php

use App\Http\Controllers\AboutController;
use App\Http\Controllers\Auth\ForgotPasswordController;
use App\Http\Controllers\Auth\LoginController;
use App\Http\Controllers\Auth\RegisterController;
use App\Http\Controllers\BlogController;
use App\Http\Controllers\ContactController;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\MyPostsController;
use Illuminate\Support\Facades\Route;

Route::get('/', [HomeController::class, 'index'])->name('home');

Route::get('/register', [RegisterController::class, 'showRegisterForm'])->name('register');
Route::post('/register', [RegisterController::class, 'register']);

Route::get('/login', [LoginController::class, 'showLoginForm'])->name('login');
Route::post('/login', [LoginController::class, 'login']);
Route::post('/logout', [LoginController::class, 'logout']);

Route::get('/forgot-password', [ForgotPasswordController::class, 'showLinkRequestForm'])->name('password.request');
Route::post('/forgot-password', [ForgotPasswordController::class, 'sendResetLinkEmail'])->name('password.email');
Route::get("/reset-password/{token}", [ForgotPasswordController::class, 'showResetForm'])->name('password.reset');
Route::post("/reset-password", [ForgotPasswordController::class, 'reset'])->name('password.update');


Route::get('/blog', [BlogController::class, 'index'])->name('blog');
Route::get('/blog/{post:slug}', [BlogController::class, 'show']);

Route::get('/about', [AboutController::class, 'index'])->name('about');

Route::get('/contact', [ContactController::class, 'index'])->name('contact');

Route::get('/my-posts', [MyPostsController::class, 'index'])->middleware('auth')->name('my-posts');
Route::get('/my-posts/create', [MyPostsController::class, 'showForm'])->middleware('auth')->name('my-posts.create');
Route::post('/my-posts/create', [MyPostsController::class, 'store'])->middleware('auth')->name('my-posts.create');
Route::get('/my-posts/update/{post:slug}', [MyPostsController::class, 'showForm'])->middleware('auth')->name('my-posts.update');
Route::post('/my-posts/update/{post:slug}', [MyPostsController::class, 'update'])->middleware('auth')->name('my-posts.update');
Route::post('/my-posts/delete/{post:slug}', [MyPostsController::class, 'delete'])->middleware('auth')->name('my-posts.delete');
