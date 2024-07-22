<?php

namespace App\Http\Controllers;

use App\Models\Post;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class BlogController extends Controller {
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request) {
        $user = Auth::user();
        if (!$user) redirect()->route('login');

        $filters = $request->only(['search', 'category', 'author']);
        $search = $request->input('search');
        $category = $request->input('category');
        $author = $request->input('author');

        $title = $search ? 'Search results for : ' . $search : ($category ? 'Category for : ' . $category : ($author ? 'Author by : ' . $author : 'Blog'));

        return Inertia::render('BlogPage', [
            'title' => $title,
            'filters' => $filters,
            'posts' => Post::filter($filters)->paginate(12),
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create() {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request) {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(Post $post) {
        return Inertia::render('BlogDetailPage', [
            'title' => 'Blog | ' . $post->title,
            'post' => $post
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id) {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id) {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id) {
        //
    }
}
