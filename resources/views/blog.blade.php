<x-layout>
    <x-slot:title>{{ $title }}</x-slot:title>
    @foreach ($posts as $post)
        <p class="text-gray-500">Category : <a href="/category/{{ $post->category->name }}"
                class="hover:underline">{{ $post->category->name }}</a></p>
        <h2 class="text-2xl font-semibold">{{ $post->title }}</h2>
        <span><a href="/author/{{ $post->author->name }}"
                class="text-blue-500 hover:underline">{{ $post->author->name }}</a>
            |
            {{ $post->created_at->format('d F Y') }}</span>
        <p class="my-3 line-clamp-2 text-justify">{{ $post->body }}</p>
        <a href="/blog/{{ $post->slug }}"
            class="inline-block rounded-full border border-blue-500 px-3 py-1.5 text-blue-500 font-medium hover:bg-blue-500 hover:text-white">Baca
            Selengkapnya</a>
        <hr class="my-5 border-gray-300">
    @endforeach
</x-layout>
