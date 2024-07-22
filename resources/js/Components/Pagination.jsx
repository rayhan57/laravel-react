import { Link } from "@inertiajs/react";
import React from "react";

const Pagination = ({ links, currentPage, lastPage, filters }) => {
  const displayLinks = 5;
  const half = Math.floor(displayLinks / 2);

  const getVisibleLinks = () => {
    let start = Math.max(currentPage - half, 1);
    let end = Math.min(currentPage + half, lastPage);

    if (currentPage <= half) {
      end = Math.min(displayLinks, lastPage);
    } else if (currentPage + half >= lastPage) {
      start = Math.max(lastPage - displayLinks + 1, 1);
    }

    return links.slice(start, end + 1);
  };

  const buildUrlWithFilters = (url) => {
    const params = new URLSearchParams(filters).toString();
    return url + (url.includes("?") ? "&" : "?") + params;
  };

  const visibleLinks = getVisibleLinks();

  return (
    <ul className="inline-flex -space-x-px">
      {/* Previous */}
      {currentPage > 1 && (
        <li className="overflow-hidden border bg-white py-2 first:rounded-l-lg hover:bg-blue-500 hover:text-white">
          <Link
            href={buildUrlWithFilters(links[currentPage - 1].url)}
            className="px-4 py-2"
          >
            Previous
          </Link>
        </li>
      )}

      {visibleLinks.map((link, index) => (
        <li
          key={index}
          className={`${link.active ? "bg-blue-500 text-white" : "bg-white hover:bg-blue-500 hover:text-white"} overflow-hidden border py-2 first:rounded-l-md last:rounded-r-md`}
        >
          <Link href={buildUrlWithFilters(link.url)} className={`px-4 py-2`}>
            {link.label === "&laquo; Previous"
              ? "Previous"
              : link.label === "Next &raquo;"
                ? "Next"
                : link.label}
          </Link>
        </li>
      ))}

      {/* Next */}
      {currentPage < lastPage && (
        <li className="overflow-hidden border bg-white py-2 last:rounded-r-lg hover:bg-blue-500 hover:text-white">
          <Link
            href={buildUrlWithFilters(links[currentPage + 1].url)}
            className="px-4 py-2"
          >
            Next
          </Link>
        </li>
      )}
    </ul>
  );
};

export default Pagination;
