import { Link } from "@inertiajs/react";
import { format } from "date-fns";
import React from "react";

const NewsCard = ({ post }) => {
  return (
    <div className="flex flex-col items-start gap-5 py-4 md:flex-row">
      <img
        src={post.thumbnail}
        alt={post.title}
        className="size-full md:size-60"
      />
      <div>
        <div className="flex items-center justify-between">
          <p>
            Posted on :{" "}
            {format(new Date(post.created_at), "dd MMM yyyy HH:mm:ss")}
          </p>
          <Link
            href={`/blog?category=${post.category.name}`}
            className="hover:underline"
          >
            {post.category.name}
          </Link>
        </div>
        <h1 className="text-2xl font-bold lg:text-3xl">{post.title}</h1>
        <p className="text-gray-500">
          Author by :{" "}
          <Link
            href={`/blog?author=${post.author.name}`}
            className="hover:underline"
          >
            {post.author.name}
          </Link>
        </p>
        <p
          className="my-3 line-clamp-3"
          dangerouslySetInnerHTML={{ __html: post.body }}
        ></p>
        <Link
          href={`/blog/${post.slug}`}
          className="inline-block rounded-md bg-blue-500 px-4 py-2 text-white hover:bg-blue-600"
        >
          Read More
        </Link>
      </div>
    </div>
  );
};

export default NewsCard;
