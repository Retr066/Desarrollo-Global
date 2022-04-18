export const CarritoDeCompras = () => {
  return (
    <button type="button" className="ml-2 sm:ml-2">
      <div className="flex items-center relative w-10 h-10">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
          />
        </svg>
        <div className="absolute flex items-center justify-center top-[-5px] right-1 h-5 w-5 my-1 border-2 border-white rounded-full bg-danger z-2">
          <b className="text-xs text-white">1</b>
        </div>
      </div>
    </button>
  );
};
