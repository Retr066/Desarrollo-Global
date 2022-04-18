import React from "react";

export const ButtonPrimary = ({ children }, props) => {
  return (
    <button
      {...props}
      className="text-white bg-primary text-sm font-semibold border px-4 py-2 ml-2
    rounded-lg hover:bg-primary-light"
    >
      {children}
    </button>
  );
};
