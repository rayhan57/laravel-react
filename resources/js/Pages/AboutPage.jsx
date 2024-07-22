import Navbar from "@/Layouts/Navbar";
import { Head, Link } from "@inertiajs/react";
import React from "react";
import AboutImage from "/public/img/about.svg";

const AboutPage = ({ title, auth }) => {
  return (
    <>
      <Head title={title} />
      <Navbar title={title} auth={auth}>
        <div className="mx-auto mt-10 flex max-w-screen-lg flex-col items-center justify-center gap-10 md:flex-row lg:mt-20">
          <div className="order-2 w-full md:order-1">
            <h1 className="mb-3 text-2xl font-bold lg:text-3xl">
              Today's News Portal with Fast Access and Personalization Features
            </h1>
            <p>
              BeritaTerkini is a news portal site that gives you quick access to
              the hottest and newest news. With the personalization feature, you
              can view your favorite topics and post news to share with others.
              Stay informed and connected to the world with BeritaTerkini.
            </p>
            <Link
              href="/register"
              className="mt-5 inline-block rounded-md bg-blue-500 px-4 py-2 text-white hover:bg-blue-600"
            >
              Get Started
            </Link>
          </div>

          <div className="order-1 w-full md:order-2">
            <img
              src={AboutImage}
              alt="About Image"
              className="mx-auto md:w-80"
            />
          </div>
        </div>
      </Navbar>
    </>
  );
};

export default AboutPage;
