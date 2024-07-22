import { Link } from "@inertiajs/react";
import { format } from "date-fns";
import React from "react";

const TextImage = ({ post }) => {
  return (
    <div className="relative">
      <img
        src={post.thumbnail}
        alt={post.title}
        loading="lazy"
        className="h-[50vh] w-full object-cover brightness-50 md:h-[80vh] lg:h-[60vh]"
      />
      <div className="absolute bottom-10 left-5 text-left text-white md:left-10 lg:bottom-28">
        <p>
          Posted on :{" "}
          {format(new Date(post.created_at), "dd MMM yyyy HH:mm:ss")}
        </p>

        <p className="text-sm text-gray-300">
          Category :{" "}
          <Link
            href={`/blog?category=${post.category.name}`}
            className="hover:underline"
          >
            {post.category.name}
          </Link>
        </p>

        <h1 className="text-3xl font-bold lg:text-5xl">{post.title}</h1>

        <p className="text-sm text-gray-300 lg:text-base">
          Author by :{" "}
          <Link
            href={`/blog?author=${post.author.name}`}
            className="hover:underline"
          >
            {post.author.name}
          </Link>
        </p>

        <p
          className="mt-5 line-clamp-2"
          dangerouslySetInnerHTML={{ __html: post.body }}
        ></p>

        <Link
          href={`/blog/${post.slug}`}
          className="mt-5 inline-block rounded-md bg-blue-500 px-4 py-2 text-sm text-white hover:bg-blue-600 lg:text-base"
        >
          Read More
        </Link>
      </div>
    </div>
  );
};

export default TextImage;
