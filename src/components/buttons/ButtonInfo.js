export const ButtonInfo = ({ children, className = "", classSpan = "", ...props }) => {
  return (
    <button
      {...props}
      className={`border border-teal-500 bg-teal-500 text-white rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-teal-600 focus:outline-none focus:shadow-outline ${className}`}
    >
      <span className={`${classSpan}`}>{children}</span>
    </button>
  );
};
