import React from "react";

const DropdownComponent = ({
  label,
  id,
  name,
  value,
  selectedValue,
  options,
  onChange,
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
      <select
        id={id}
        name={name}
        value={value}
        onChange={onChange}
        required={required}
        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-none focus:ring-1 focus:ring-blue-500"
      >
        <option value="">{selectedValue}</option>
        {options.map((option) => (
          <option key={option.id} value={option.id}>
            {option.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default DropdownComponent;
