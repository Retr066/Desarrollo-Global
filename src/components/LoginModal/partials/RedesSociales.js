export const RedesSociales = () => {
  return (
    <div className="my-3 grid grid-cols-2 gap-7">
      <button className="group h-12 px-6 border-2 border-gray-300 rounded-full transition duration-300 hover:border-primary focus:bg-blue-50 active:bg-blue-100">
        <div className="relative flex items-center space-x-4 justify-center">
          <img src="https://tailus.io/sources/blocks/social/preview/images/google.svg" className="absolute left-0 w-5" alt="google logo" />
          <span className="block w-max font-semibold tracking-wide  text-sm transition duration-300 group-hover:text-primary-light sm:text-base">
            Google
          </span>
        </div>
      </button>
      <button className="group h-12 px-6 border-2 border-gray-300 rounded-full transition duration-300 hover:border-primary focus:bg-blue-50 active:bg-blue-100">
        <div className="relative flex items-center space-x-4 justify-center">
          <img
            src="https://upload.wikimedia.org/wikipedia/en/0/04/Facebook_f_logo_%282021%29.svg"
            className="absolute left-0 w-5"
            alt="Facebook logo"
          />
          <span className="block w-max font-semibold tracking-wide text-sm transition duration-300 group-hover:text-primary-light sm:text-base">
            Facebook
          </span>
        </div>
      </button>
    </div>
  );
};
