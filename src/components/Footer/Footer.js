import { RedesSocialesLinks, DerechosReservados, Accesos, Logos } from "./partials";
export const Footer = () => {
  const currentTime = new Date();
  const year = currentTime.getFullYear();

  return (
    <footer className="p-4 sm:p-6  sm:px-16">
      <div className="lg:flex lg:justify-between">
        <Logos />
        <Accesos />
      </div>
      <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
      <div className="sm:flex sm:items-center sm:justify-between">
        <DerechosReservados year={year} />
        <RedesSocialesLinks />
      </div>
    </footer>
  );
};
