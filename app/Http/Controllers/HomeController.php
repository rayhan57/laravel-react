<?php

namespace App\Http\Controllers;

use App\Models\Post;
use Illuminate\Http\Request;
use Inertia\Inertia;

class HomeController extends Controller {
    public function index(Post $post) {
        return Inertia::render('HomePage', [
            'title' => 'Home',
            'posts' => $post->latest()->take(5)->get(),
            'related' => $post->take(3)->get()
        ]);
    }
}
