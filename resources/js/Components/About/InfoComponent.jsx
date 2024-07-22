import React from "react";

const InfoComponent = ({ icon, title, description }) => {
  return (
    <div className="flex w-full items-center justify-start text-white md:flex-col md:space-y-3">
      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-500 text-2xl md:-mt-12 md:h-20 md:w-20 md:text-3xl">
        {icon}
      </div>
      <div className="ms-4 md:ms-0 md:space-y-3">
        <h2 className="text-lg font-bold md:text-center md:text-xl">{title}</h2>
        <p className="text-sm md:text-center">{description}</p>
      </div>
    </div>
  );
};

export default InfoComponent;
