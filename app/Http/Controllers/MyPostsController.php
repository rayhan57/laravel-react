<?php

namespace App\Http\Controllers;

use App\Models\Category;
use App\Models\Post;
use Inertia\Inertia;
use Illuminate\Support\Str;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class MyPostsController extends Controller {
    public function index() {
        return Inertia::render('MyPosts/Index', [
            'title' => 'My Posts',
            'posts' => Auth::user()->posts

        ]);
    }

    public function showForm(Request $request, Post $post) {
        $title = $request->url() == route('my-posts.create') ? 'Create Post' : 'Update Post';

        return Inertia::render('MyPosts/FormPost', [
            'title' => $title,
            'categories' => Category::all(),
            'post' => $post
        ]);
    }

    public function store(Request $request) {
        $validatedData = $request->validate([
            'thumbnail' => 'required|image|max:2048',
            'title' => 'required|string|max:255',
            'category_id' => 'required|integer|exists:categories,id',
            'body' => 'required',
        ]);

        if ($request->hasFile('thumbnail')) {
            $file = $request->file('thumbnail');
            $fileName = time() . '_' . $file->getClientOriginalName();
            $file->move(public_path('uploads/thumbnails'), $fileName);
            $validatedData['thumbnail'] = 'uploads/thumbnails/' . $fileName;
        }

        $post = new Post();
        $post->thumbnail = $validatedData['thumbnail'];
        $post->title = $validatedData['title'];
        $post->author_id = Auth::id();
        $post->category_id = $validatedData['category_id'];
        $post->slug = Str::slug($validatedData['title'], '-');
        $post->body = $validatedData['body'];

        if ($post->save()) {
            return redirect()->route('my-posts')->with('message', 'Post created successfully.');
        }

        return redirect()->back()->withErrors(['error' => 'Failed to create post.']);
    }

    public function update(Request $request, Post $post) {
        $validatedData = $request->validate([
            'thumbnail' => 'image|max:2048',
            'title' => 'required|string|max:255',
            'category_id' => 'required|integer|exists:categories,id',
            'body' => 'required|string',
        ]);

        if ($post->author_id != Auth::id()) {
            return redirect()->back()->withErrors(['error' => 'You do not have permission to edit this post.']);
        }

        if ($request->hasFile('thumbnail')) {
            if ($post->thumbnail && file_exists(public_path($post->thumbnail))) {
                unlink(public_path($post->thumbnail));
            }

            $file = $request->file('thumbnail');
            $fileName = time() . '_' . $file->getClientOriginalName();
            $file->move(public_path('uploads/thumbnails'), $fileName);
            $validatedData['thumbnail'] = 'uploads/thumbnails/' . $fileName;
            $post->thumbnail = $validatedData['thumbnail'];
        }

        $post->title = $validatedData['title'];
        $post->category_id = $validatedData['category_id'];
        $post->slug = Str::slug($validatedData['title'], '-');
        $post->body = $validatedData['body'];

        if ($post->save()) {
            return redirect()->route('my-posts')->with('message', 'Post updated successfully.');
        }

        return redirect()->back()->withErrors(['error' => 'Failed to update post.']);
    }

    public function delete(Post $post) {
        if ($post->author_id != Auth::id()) {
            return redirect()->back()->withErrors(['error' => 'You do not have permission to delete this post.']);
        }

        if ($post->delete()) {
            return redirect()->route('my-posts')->with('message', 'Post deleted successfully.');
        }

        return redirect()->back()->withErrors(['error' => 'Failed to delete post.']);
    }
}
