import MobileMenu from "@/Components/Navbar/MobileMenu";
import NavLink from "@/Components/Navbar/NavLink";
import ProfileMenu from "@/Components/Navbar/ProfileMenu";
import { usePage } from "@inertiajs/react";
import React, { useState } from "react";
import { FaBars } from "react-icons/fa6";
import { IoClose } from "react-icons/io5";
import logo from "/public/img/logo.png";
import userProfile from "/public/img/user.png";

const Navbar = ({ children, title, auth }) => {
  const pathname = usePage().url;
  const [navbarOpen, setNavbarOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);

  const isActive = (path) => pathname === path;

  const links = [
    { label: "Home", href: "/" },
    { label: "Blog", href: "/blog" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
  ];

  const profileItems = auth.user
    ? [
        { label: "My Posts", href: "/my-posts" },
        { label: "Logout", href: "/logout" },
      ]
    : [
        { label: "Register", href: "/register" },
        { label: "Login", href: "/login" },
      ];

  return (
    <div className="min-h-full">
      <nav className="bg-gray-800">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <img className="h-8 w-8" src={logo} alt="News App Logo" />
              </div>
              <div className="hidden md:block">
                <div className="ml-10 flex items-baseline space-x-4">
                  {links.map((link) => (
                    <NavLink
                      key={link.label}
                      href={link.href}
                      active={isActive(link.href)}
                    >
                      {link.label}
                    </NavLink>
                  ))}
                </div>
              </div>
            </div>
            <div className="hidden md:block">
              <div className="ml-4 flex items-center md:ml-6">
                <ProfileMenu
                  profileOpen={profileOpen}
                  setProfileOpen={setProfileOpen}
                  profileItems={profileItems}
                  user={auth.user}
                  userProfile={userProfile}
                />
              </div>
            </div>
            <div className="-mr-2 flex md:hidden">
              <button
                type="button"
                className="relative inline-flex items-center justify-center rounded-md bg-gray-800 p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                onClick={() => setNavbarOpen(!navbarOpen)}
              >
                {navbarOpen ? <IoClose size={24} /> : <FaBars size={24} />}
              </button>
            </div>
          </div>
        </div>

        {navbarOpen && (
          <MobileMenu
            links={links}
            isActive={isActive}
            profileItems={profileItems}
            user={auth.user}
            userProfile={userProfile}
          />
        )}
      </nav>

      <header className="bg-white shadow">
        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold tracking-tight text-gray-900">
            {title}
          </h1>
        </div>
      </header>
      <main>
        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
          {children}
        </div>
      </main>
    </div>
  );
};

export default Navbar;
