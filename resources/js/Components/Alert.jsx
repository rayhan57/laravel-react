import React, { useEffect } from "react";

const Alert = ({ show, onClose, message }) => {
  useEffect(() => {
    if (show) {
      const timeout = setTimeout(onClose, 5000);

      return () => clearTimeout(timeout);
    }
  }, [show, onClose]);

  return (
    show && (
      <div className="absolute left-1/2 top-5 -translate-x-1/2 rounded-md bg-green-600 p-2 text-white">
        {message}
      </div>
    )
  );
};

export default Alert;
