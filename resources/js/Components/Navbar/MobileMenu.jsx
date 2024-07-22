import React from "react";
import NavLink from "./NavLink";
import { Link } from "@inertiajs/react";

const MobileMenu = ({ links, isActive, profileItems, user, userProfile }) => {
  return (
    <div className="md:hidden" id="mobile-menu">
      <div className="space-y-1 px-2 pb-3 pt-2 sm:px-3">
        {links.map((link) => (
          <NavLink
            key={link.label}
            href={link.href}
            isMobile
            active={isActive(link.href)}
          >
            {link.label}
          </NavLink>
        ))}
      </div>
      <div className="border-t border-gray-700 pb-3 pt-4">
        {user && (
          <div className="flex items-center px-5">
            <div className="flex-shrink-0">
              <img
                className="h-10 w-10 rounded-full"
                src={userProfile}
                alt=""
              />
            </div>
            <div className="ml-3">
              <div className="text-base font-medium leading-none text-white">
                {user.name}
              </div>
              <div className="text-sm font-medium leading-none text-gray-400">
                {user.email}
              </div>
            </div>
          </div>
        )}
        <div className="mt-3 space-y-1 px-2">
          {profileItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              method={item.href === "/logout" ? "post" : "get"}
              as={item.href === "/logout" ? "button" : "a"}
              className="block rounded-md px-3 py-2 text-base font-medium text-gray-400 hover:bg-gray-700 hover:text-white"
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;
