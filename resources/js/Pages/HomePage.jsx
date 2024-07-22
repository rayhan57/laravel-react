import Navbar from "@/Layouts/Navbar";
import { Head, Link } from "@inertiajs/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import SliderImage from "@/Components/Home/SliderImage";
import NewsCard from "@/Components/Home/NewsCard";

const HomePage = ({ title, posts, related, auth }) => {
  return (
    <>
      <Head title={title} />
      <Navbar title={title} auth={auth}>
        <h1 className="text-2xl font-bold">Hot News</h1>
      </Navbar>
      <SliderImage posts={posts} />

      <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
        <div className="mb-5 flex items-center justify-between">
          <h1 className="text-2xl font-bold">Related News</h1>
          <Link href="/blog" className="text-blue-500 hover:underline">
            View All
          </Link>
        </div>
        <div className="space-y-5 divide-y-2">
          {related.map((post) => (
            <NewsCard key={post.id} post={post} />
          ))}
        </div>
      </div>
    </>
  );
};

export default HomePage;
