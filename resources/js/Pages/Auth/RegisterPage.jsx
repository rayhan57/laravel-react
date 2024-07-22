import Alert from "@/Components/Alert";
import InputComponent from "@/Components/InputComponent";
import { Head, Link } from "@inertiajs/react";
import React, { useEffect, useState } from "react";
import Logo from "/public/img/logo.png";

const RegisterPage = ({ errors, flash }) => {
  const [showAlert, setShowAlert] = useState(false);
  const [csrfToken, setCsrfToken] = useState("");

  useEffect(() => {
    const token = document
      .querySelector("meta[name='csrf-token']")
      .getAttribute("content");
    setCsrfToken(token);
    setShowAlert(flash.message ? true : false);
  }, []);

  return (
    <div>
      <Head title="Register" />
      <div className="container flex h-screen items-center justify-center md:my-14 lg:my-0">
        {showAlert && (
          <Alert
            show={showAlert}
            onClose={() => setShowAlert(false)}
            message={flash.message}
          />
        )}
        <div className="mx-auto flex flex-col items-center overflow-hidden rounded-md bg-white shadow-md md:flex-row">
          <div className="w-full space-y-7 bg-gradient-to-t from-blue-500 to-blue-700 p-7 text-center text-white md:space-y-20 md:py-14 lg:py-20">
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
              Register now at BeritaTerkini to enjoy exclusive access to the
              latest and hottest news. Personalize your favorite topics and
              share interesting news with the community. Join us to stay
              informed and connected to the world.
            </p>
          </div>

          <div className="w-full p-7">
            <h1 className="pb-5 text-center text-xl font-medium">
              Create an account
            </h1>
            <form method="POST" action="/register">
              <input type="hidden" name="_token" value={csrfToken} />
              <InputComponent
                id="name"
                label="Name"
                type="text"
                name="name"
                errorMessage={errors.name}
                required
              />
              <InputComponent
                id="email"
                label="Email"
                type="email"
                name="email"
                errorMessage={errors.email}
                required
              />
              <InputComponent
                id="password"
                label="Password"
                type="password"
                name="password"
                errorMessage={errors.password}
                required
              />
              <InputComponent
                id="password_confirmation"
                label="Confirm Password"
                type="password"
                name="password_confirmation"
                errorMessage={errors.password_confirmation}
                required
              />
              <button
                type="submit"
                className="w-full rounded-md bg-gradient-to-b from-blue-500 to-blue-700 px-4 py-2 text-white hover:bg-gradient-to-t"
              >
                Register
              </button>
            </form>
            <p className="mt-5 text-center">
              Already have an account?{" "}
              <Link
                href="/login"
                className="font-medium text-blue-500 hover:underline"
              >
                Login
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
