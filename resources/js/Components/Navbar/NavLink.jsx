import { Link } from "@inertiajs/react";
import React from "react";

const NavLink = ({ children, href, isMobile, active }) => {
  return (
    <Link
      href={href}
      className={`${isMobile ? "block text-base" : "text-sm"} ${active ? "bg-gray-900 text-white" : "text-gray-300 hover:bg-gray-700 hover:text-white"} rounded-md px-3 py-2 font-medium text-white`}
    >
      {children}
    </Link>
  );
};

export default NavLink;
