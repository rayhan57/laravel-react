import { Head } from "@inertiajs/react";
import React, { useEffect, useState } from "react";
import Forgotlogo from "/public/img/forgot_password.svg";

const ForgotPassword = ({ errors, flash }) => {
  const [csrfToken, setCsrfToken] = useState("");

  useEffect(() => {
    const token = document
      .querySelector('meta[name="csrf-token"]')
      .getAttribute("content");
    setCsrfToken(token);
  }, []);

  return (
    <>
      <Head title="Forgot Password" />
      <div className="container flex h-screen flex-col items-center justify-center gap-8 md:flex-row">
        <img src={Forgotlogo} alt="Forgot Password" className="md:w-1/2" />

        <div className="w-full">
          {flash.message && (
            <p className="rounded-md bg-green-100 p-1 text-green-700">
              {flash.message}
            </p>
          )}
          <h2 className="text-xl font-bold">Forgot Password</h2>
          <p className="mb-5 text-sm text-gray-500">
            Enter your email address and we will send you a password reset link.
          </p>
          <form action="/forgot-password" method="post">
            <input type="hidden" name="_token" value={csrfToken} />
            <input
              type="email"
              name="email"
              id="email"
              placeholder="youremail@example.com"
              className="w-full rounded-md border-gray-300 focus:border-none focus:outline-none focus:ring-1 focus:ring-black lg:w-1/2"
              required
            />
            <p className="text-sm text-red-500">{errors.email}</p>
            <button className="mt-5 w-full rounded-md bg-green-600 px-4 py-2 text-white hover:bg-green-700 lg:w-1/2">
              Submit
            </button>
          </form>
        </div>
      </div>
      ;
    </>
  );
};

export default ForgotPassword;
