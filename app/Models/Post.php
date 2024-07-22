<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Post extends Model {
    use HasFactory;

    protected $fillable = [
        'thumbnail',
        'title',
        'author_id',
        'category_id',
        'slug',
        'body',
    ];

    protected $with = ['author', 'category'];

    public function author() {
        return $this->belongsTo(User::class, 'author_id');
    }

    public function category() {
        return $this->belongsTo(Category::class, 'category_id');
    }

    public function scopeFilter(Builder $query, array $filters) {
        $query->when(
            $filters['search'] ?? false,
            fn ($query, $search) => $query->where('title', 'LIKE', "%{$search}%")
        );

        $query->when(
            $filters['category'] ?? false,
            fn ($query, $category) => $query->whereHas(
                'category',
                fn ($query) => $query->where('name', $category)
            )
        );

        $query->when(
            $filters['author'] ?? false,
            fn ($query, $author) => $query->whereHas(
                'author',
                fn ($query) => $query->where('name', $author)
            )
        );

        return $query;
    }
}
