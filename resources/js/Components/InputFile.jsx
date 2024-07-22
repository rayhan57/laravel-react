import React, { useState } from "react";

const InputFile = ({
  id,
  label,
  name,
  value,
  accept,
  onChange,
  required,
  errorMessage,
}) => {
  return (
    <div className="mb-3">
      <label
        htmlFor={id}
        className="mb-1 block text-sm font-medium text-gray-700"
      >
        {label}
      </label>
      <input
        type="file"
        id={id}
        name={name}
        className="block w-full border-gray-300 shadow-sm focus:border-none focus:ring-1 focus:ring-blue-500"
        accept={accept}
        value={value}
        onChange={onChange}
        required={required}
      />
      <p className="text-sm text-red-500">{errorMessage}</p>
    </div>
  );
};

export default InputFile;
