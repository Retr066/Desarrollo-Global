import { socialMediaLinks } from "../data";
export const RedesSocialesLinks = () => {
  return (
    <div className="flex mt-4 space-x-6 sm:justify-center sm:mt-0">
      {socialMediaLinks.map(({ href, Icon }, index) => (
        <a key={index} target="_blank" rel="noreferrer" href={href} className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
          <Icon />
        </a>
      ))}
    </div>
  );
};
