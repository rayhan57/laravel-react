<x-layout>
    <x-slot:title>{{ $title }}</x-slot:>
        <p class="text-gray-500">Category : <a href="/category/{{ $post->category->name }}"
                class="hover:underline">{{ $post->category->name }}</a></p>
        <h2 class="text-2xl font-semibold">{{ $post->title }}</h2>
        <span><a href="/author/{{ $post->author->name }}"
                class="text-blue-500 hover:underline">{{ $post->author->name }}</a> |
            {{ $post->created_at->format('d F Y') }}</span>
        <p class="my-3 text-justify">{{ $post->body }}</p>
        <a href='/blog' class="mb-5 inline-block text-blue-500 font-medium hover:text-blue-700">Kembali ke
            Blog</a>
</x-layout>
