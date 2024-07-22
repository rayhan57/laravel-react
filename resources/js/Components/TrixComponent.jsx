import React from "react";

const TrixComponent = ({
  id,
  label,
  name,
  value,
  onChange,
  errorMessage,
  required,
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
        id={id}
        type="hidden"
        name={name}
        value={value}
        onChange={onChange}
        required={required}
      />
      <trix-editor input={id}></trix-editor>
      <p className="text-sm text-red-500">{errorMessage}</p>
    </div>
  );
};

export default TrixComponent;
