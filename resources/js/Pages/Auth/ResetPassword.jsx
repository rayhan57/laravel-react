import InputComponent from "@/Components/InputComponent";
import { Head, Link } from "@inertiajs/react";
import React, { useEffect, useState } from "react";

const ResetPassword = ({ token, email, errors }) => {
  const [csrfToken, setCsrfToken] = useState("");

  useEffect(() => {
    const token = document
      .querySelector("meta[name='csrf-token']")
      .getAttribute("content");
    setCsrfToken(token);
  }, []);

  return (
    <>
      <Head title="Reset Password" />
      <div className="container my-10">
        <div className="mx-auto max-w-md text-center">
          <h1 className="mb-3 text-2xl font-semibold">
            Reset account password
          </h1>
          <p className="mb-5 text-gray-500">Enter a new password for {email}</p>

          <form action="/reset-password" method="post" className="text-left">
            <input type="hidden" name="_token" value={csrfToken} />
            <input type="hidden" name="token" value={token} />
            <input type="hidden" name="email" value={email} />
            <p className="text-sm text-red-500">{errors.email}</p>
            <InputComponent
              id="password"
              label="Password"
              type="password"
              name="password"
              required
              errorMessage={errors.password}
            />
            <InputComponent
              id="password_confirmation"
              label="Confirm Password"
              type="password"
              name="password_confirmation"
              required
              errorMessage={errors.password_confirmation}
            />
            <button
              type="submit"
              className="mx-auto block rounded-md bg-green-600 px-4 py-2 text-white hover:bg-green-700"
            >
              Reset Password
            </button>
          </form>
          <Link
            href="/login"
            className="mt-5 inline-block text-blue-500 hover:underline"
          >
            &larr; Back to Login
          </Link>
        </div>
      </div>
    </>
  );
};

export default ResetPassword;
