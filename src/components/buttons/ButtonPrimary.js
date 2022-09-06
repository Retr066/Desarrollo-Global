import React from "react";

export const ButtonPrimary = ({ children, className = "", classSpan = "", tipo = "", ...props }) => {
  if (tipo === "outline") {
    return (
      <button
        {...props}
        className={`px-4 py-2 bg-transparent border border-primary text-primary transition duration-150 rounded-lg dark:text-white dark:border-white dark:hover:border-primary  hover:bg-primary hover:text-gray-100 focus:ring-2 focus:border-primary-light ${className}`}
      >
        {children}
      </button>
    );
  }

  return (
    <button
      {...props}
      className={`text-white bg-primary text-sm font-semibold border px-4 py-2 transition duration-150
    rounded-lg hover:bg-primary-light border-none focus:outline-none focus:bg-primary-light focus:ring-2 ${className}`}
    >
      <span className={`${classSpan}`}> {children}</span>
    </button>
  );
};
