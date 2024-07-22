import Alert from "@/Components/Alert";
import PostCard from "@/Components/Blog/PostCard";
import Navbar from "@/Layouts/Navbar";
import { Head, Link } from "@inertiajs/react";
import React, { useEffect, useState } from "react";

const Index = ({ title, posts, auth, flash }) => {
  const [showAlert, setShowAlert] = useState(false);
  const isNoPost = posts.length === 0;

  useEffect(() => {
    if (flash.message) {
      setShowAlert(true);
    }
  }, [flash]);

  return (
    <div>
      <Head title={title} />
      <Alert
        message={flash.message}
        show={showAlert}
        onClose={() => setShowAlert(false)}
      />
      <Navbar title={title} auth={auth}>
        <Link
          href="my-posts/create"
          className="rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-700"
        >
          Add new post
        </Link>
        {isNoPost && <p className="mt-3 text-center">No posts found.</p>}
        <div className="mt-5 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <PostCard key={post.id} post={post} auth={auth} />
          ))}
        </div>
      </Navbar>
    </div>
  );
};

export default Index;
