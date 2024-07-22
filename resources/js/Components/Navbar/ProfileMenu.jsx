import { Link } from "@inertiajs/react";
import React from "react";

const ProfileMenu = ({
  setProfileOpen,
  profileOpen,
  profileItems,
  user,
  userProfile,
}) => {
  return (
    <div className="relative ml-3">
      <div>
        <button
          type="button"
          className="relative flex max-w-xs items-center rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
          id="user-menu-button"
          aria-expanded="false"
          aria-haspopup="true"
          onClick={() => setProfileOpen(!profileOpen)}
        >
          <img
            className="h-8 w-8 rounded-full"
            src={userProfile}
            alt="User Profile"
          />
        </button>
      </div>

      {profileOpen && (
        <div
          className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="user-menu-button"
        >
          {user && (
            <p className="block border-b px-4 py-2 text-sm font-bold text-gray-700">
              {user.name} <br />
              <span className="font-normal text-gray-500">{user.email}</span>
            </p>
          )}
          {profileItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              method={item.href === "/logout" ? "post" : "get"}
              as={item.href === "/logout" ? "button" : "a"}
              className="block w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-100"
            >
              {item.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default ProfileMenu;
