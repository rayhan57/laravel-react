import React, { useState } from "react";
import { VscEye } from "react-icons/vsc";
import { VscEyeClosed } from "react-icons/vsc";

const InputComponent = ({
  label,
  type,
  name,
  id,
  value,
  onChange,
  errorMessage,
  required,
}) => {
  const [isShowPassword, setIsShowPassword] = useState(false);

  return (
    <div className="mb-3">
      <label
        htmlFor={id}
        className="mb-1 block text-sm font-medium text-gray-700"
      >
        {label}
      </label>
      <div className="relative">
        <input
          type={type === "password" && isShowPassword ? "text" : type}
          name={name}
          id={id}
          value={value}
          className="block w-full rounded-md border-gray-300 shadow-sm focus:border-none focus:ring-1 focus:ring-blue-500"
          required={required}
          onChange={onChange}
        />
        {type === "password" ? (
          <button
            type="button"
            className="absolute right-3 top-1/2 -translate-y-1/2"
            onClick={() => setIsShowPassword(!isShowPassword)}
          >
            {isShowPassword ? <VscEye size={20} /> : <VscEyeClosed size={20} />}
          </button>
        ) : null}
      </div>
      <p className="text-sm text-red-500">{errorMessage}</p>
    </div>
  );
};

export default InputComponent;
