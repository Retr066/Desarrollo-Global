import React from "react";

export const ButtonPrimary = ({ children, className = "", ...props }) => {
  return (
    <button
      {...props}
      className={`text-white bg-primary text-sm font-semibold border px-4 py-2 
    rounded-lg hover:bg-primary-light focus:outline-none focus:bg-primary-light focus:ring-2 ${className}`}
    >
      {children}
    </button>
  );
};
