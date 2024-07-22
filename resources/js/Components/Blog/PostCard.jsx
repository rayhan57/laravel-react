import { Link } from "@inertiajs/react";
import { format } from "date-fns";
import React, { useState } from "react";
import ModalConfirm from "../ModalConfirm";

const PostCard = ({ post, auth }) => {
  const user = auth?.user;
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <ModalConfirm
        message="Are you sure you want to delete this post?"
        open={showModal}
        onClose={() => setShowModal(false)}
        link={`/my-posts/delete/${post.slug}`}
      />
      <div className="relative rounded-md bg-white shadow-md">
        <a href={post.thumbnail} target="_blank" rel="noopener noreferrer">
          <img
            className="max-h-96 w-full rounded-t-md object-cover"
            src={post.thumbnail}
            loading="lazy"
            alt={post.title}
          />
        </a>
        <Link
          href={`/blog?category=${post.category.name}${user ? `&author=${user.name}` : ""}`}
          className="absolute left-0 top-0 rounded-br-md rounded-tl-md bg-white/70 p-1 hover:bg-white/80"
        >
          {post.category.name}
        </Link>

        <div className="space-y-3 p-4">
          <p className="font-medium text-blue-500">
            {format(new Date(post.created_at), "dd MMM yyyy")} |{" "}
            <Link
              href={`/blog?author=${post.author.name}`}
              className="font-normal text-black hover:underline"
            >
              {post.author.name}
            </Link>
          </p>

          <h3 className="text-xl font-bold">{post.title}</h3>

          <p
            className="line-clamp-4 text-justify"
            dangerouslySetInnerHTML={{ __html: post.body }}
          ></p>

          <div className="flex items-center justify-between">
            <Link
              href={`/blog/${post.slug}`}
              className="inline-block font-medium text-blue-500 hover:underline"
            >
              Read More &rarr;
            </Link>
            {auth && (
              <div className="space-x-1">
                <Link
                  href={`/my-posts/update/${post.slug}`}
                  className="rounded-full bg-yellow-500 px-2 py-0.5 text-sm text-white hover:bg-yellow-600"
                >
                  Edit
                </Link>
                <button
                  className="rounded-full bg-red-500 px-2 py-0.5 text-sm text-white hover:bg-red-600"
                  onClick={() => setShowModal(true)}
                >
                  Delete
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default PostCard;
