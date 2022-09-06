import { NavLink } from "react-router-dom";

export const NavItem = ({ to, nombre, href, index, Icon, toggleMenuResponsive }) => {
  return (
    <li className={`${index >= 1 && "border-t"}`} onClick={toggleMenuResponsive}>
      {href === true ? (
        <a
          href={to}
          target="_blank"
          rel="noreferrer"
          className="flex items-center p-4 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
        >
          <Icon className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" />
          <span className="flex-1 ml-3 whitespace-nowrap font-bold">{nombre}</span>
        </a>
      ) : (
        <NavLink
          to={to}
          className="flex items-center p-4 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
        >
          <Icon className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" />
          <span className="flex-1 ml-3 whitespace-nowrap font-bold">{nombre}</span>
        </NavLink>
      )}
    </li>
  );
};
