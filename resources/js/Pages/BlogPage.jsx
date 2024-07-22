import PostCard from "@/Components/Blog/PostCard";
import SearchInput from "@/Components/Blog/SearchInput";
import Pagination from "@/Components/Pagination";
import Navbar from "@/Layouts/Navbar";
import { Head } from "@inertiajs/react";
import React from "react";

const BlogPage = ({ title, posts, filters, auth }) => {
  const isNoPost = posts.data.length === 0;

  return (
    <>
      <Head title={title} />
      <Navbar title={title} auth={auth}>
        <SearchInput />
        {isNoPost && <p className="text-center">No posts found.</p>}
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {posts.data.map((post) => (
            <PostCard key={post.id} post={post} />
          ))}
        </div>
        <div className="mt-7 text-center">
          <Pagination
            links={posts.links}
            currentPage={posts.current_page}
            lastPage={posts.last_page}
            filters={filters}
          />
        </div>
      </Navbar>
    </>
  );
};

export default BlogPage;
