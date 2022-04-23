export const ButtonClose = ({ className = "", ...props }) => {
  return (
    <button
      type="button"
      className={`p-1 ml-auto border-0 top-0 right-0  absolute text-3xl leading-none font-semibold outline-none focus:outline-none ${className}`}
      {...props}
    >
      <span className=" h-6 w-6 text-2xl block outline-none focus:outline-none">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </span>
    </button>
  );
};
