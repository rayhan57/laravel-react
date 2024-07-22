import InputComponent from "@/Components/InputComponent";
import { Head, Link } from "@inertiajs/react";
import React, { useEffect, useState } from "react";
import Logo from "/public/img/logo.png";
import Alert from "@/Components/Alert";

const LoginPage = ({ errors, flash }) => {
  const [csrfToken, setCsrfToken] = useState("");
  const [showAlert, setShowAlert] = useState(false);

  useEffect(() => {
    const token = document
      .querySelector("meta[name='csrf-token']")
      .getAttribute("content");
    setCsrfToken(token);

    if (flash.message) {
      setShowAlert(true);
    }
  }, []);

  return (
    <>
      <Head title="Login" />
      <Alert
        show={showAlert}
        onClose={() => setShowAlert(false)}
        message={flash.message}
      />
      <div className="container flex h-screen items-center justify-center">
        <div className="mx-auto flex flex-col items-center overflow-hidden rounded-md bg-white shadow-md md:flex-row">
          <div className="w-full space-y-7 bg-gradient-to-t from-blue-500 to-blue-700 p-7 text-center text-white lg:space-y-14">
            <h3 className="text-xl">Welcome to</h3>
            <div>
              <img
                src={Logo}
                alt="logo"
                className="mx-auto size-20 rounded-full object-contain"
              />
              <h3 className="text-xl">BeritaTerkini</h3>
            </div>
            <p className="text-sm text-gray-300">
              Welcome to Latest News! Login to get instant access to the latest
              and hottest news. Personalize your experience and share your
              favorite news with the community. Stay informed and connected to
              the world with us.
            </p>
          </div>

          <div className="w-full p-7">
            <h1 className="pb-5 text-center text-xl font-medium">
              Login to your account
            </h1>
            <form method="POST" action="/login">
              <input type="hidden" name="_token" value={csrfToken} />
              <p className="mb-1 text-sm text-red-500">{errors.account}</p>
              <InputComponent
                id="email"
                label="Email"
                type="email"
                name="email"
                required
              />
              <InputComponent
                id="password"
                label="Password"
                type="password"
                name="password"
                required
              />
              <Link
                href="/forgot-password "
                className="float-end -mt-3 mb-3 font-medium text-blue-500 hover:underline"
              >
                Forgot Password?
              </Link>
              <button
                type="submit"
                className="w-full rounded-md bg-gradient-to-b from-blue-500 to-blue-700 px-4 py-2 text-white hover:bg-gradient-to-t"
              >
                Login
              </button>
            </form>
            <p className="mt-5 text-center">
              Don't have an account?{" "}
              <Link
                href="/register"
                className="font-medium text-blue-500 hover:underline"
              >
                Register
              </Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
