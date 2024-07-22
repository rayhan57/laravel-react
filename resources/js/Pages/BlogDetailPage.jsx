import Navbar from "@/Layouts/Navbar";
import { Head, Link } from "@inertiajs/react";
import { format } from "date-fns";
import React from "react";

const BlogDetailPage = ({ title, post, auth }) => {
  return (
    <>
      <Head title={title} />
      <Navbar title={title} auth={auth}>
        <div className="space-y-3">
          <p>
            Category :{" "}
            <Link
              href={`/blog?category=${post.category.name}`}
              className="hover:underline"
            >
              {" "}
              {post.category.name}
            </Link>
          </p>
          <a
            href={`/${post.thumbnail}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={`/${post.thumbnail}`}
              alt={post.title}
              className="w-full object-cover md:h-[60vh] lg:h-[50vh]"
            />
          </a>
          <p className="font-medium text-blue-500">
            {format(new Date(post.created_at), "dd MMMM yyyy")} |{" "}
            <Link
              href={`/blog?author=${post.author.name}`}
              className="font-normal text-black hover:underline"
            >
              {" "}
              {post.author.name}
            </Link>
          </p>
          <h1 className="text-xl font-bold lg:text-3xl">{post.title}</h1>
          <p
            className="text-justify lg:text-lg"
            dangerouslySetInnerHTML={{ __html: post.body }}
          ></p>
          <Link
            href="/blog"
            className="inline-block font-medium text-blue-500 hover:underline"
          >
            &larr; Back to Blog
          </Link>
        </div>
      </Navbar>
    </>
  );
};

export default BlogDetailPage;
