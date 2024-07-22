import { Link } from "@inertiajs/react";
import React from "react";
import { PiWarningOctagon } from "react-icons/pi";

const ModalConfirm = ({ message, open, onClose, link }) => {
  return (
    open && (
      <div className="fixed left-0 top-0 z-20 flex h-full w-full items-center justify-center bg-black/50">
        <div className="space-y-3 rounded-md bg-white p-4">
          <PiWarningOctagon className="mx-auto text-7xl" />
          <h1 className="text-lg">{message}</h1>
          <div className="flex justify-end space-x-2">
            <button
              className="rounded-md bg-gray-500 px-4 py-2 text-white hover:bg-gray-600"
              onClick={onClose}
            >
              No
            </button>
            <Link
              href={link}
              method="post"
              as="button"
              className="rounded-md bg-red-500 px-4 py-2 text-white hover:bg-red-600"
            >
              Yes
            </Link>
          </div>
        </div>
      </div>
    )
  );
};

export default ModalConfirm;
