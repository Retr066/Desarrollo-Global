import { useCallback } from "react";
import { useRef } from "react";
import { Link, NavLink } from "react-router-dom";
import { ToggleDarkMode } from "../../ToggleDarkMode";
import { Buscador } from "./Buscador";

const NavItemResponsive = ({ to, nombre, href, index, toggleMenuResponsive }) => {
  return (
    <li className={`${index >= 1 && "border-t-2"}`} onClick={toggleMenuResponsive}>
      {href === true ? (
        <a
          href={to}
          target="_blank"
          rel="noreferrer"
          className="flex items-center p-4 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
        >
          <svg
            className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M8.707 7.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l2-2a1 1 0 00-1.414-1.414L11 7.586V3a1 1 0 10-2 0v4.586l-.293-.293z"></path>
            <path d="M3 5a2 2 0 012-2h1a1 1 0 010 2H5v7h2l1 2h4l1-2h2V5h-1a1 1 0 110-2h1a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2V5z"></path>
          </svg>
          <span className="flex-1 ml-3 whitespace-nowrap">{nombre}</span>
        </a>
      ) : (
        <NavLink
          to={to}
          className="flex items-center p-4 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
        >
          <svg
            className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M8.707 7.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l2-2a1 1 0 00-1.414-1.414L11 7.586V3a1 1 0 10-2 0v4.586l-.293-.293z"></path>
            <path d="M3 5a2 2 0 012-2h1a1 1 0 010 2H5v7h2l1 2h4l1-2h2V5h-1a1 1 0 110-2h1a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2V5z"></path>
          </svg>
          <span className="flex-1 ml-3 whitespace-nowrap">{nombre}</span>
        </NavLink>
      )}
    </li>
  );
};

export const NavbarResponsivo = ({ navShow, links, toggleMenuResponsive }) => {
  const sidebarElement = useRef(null);
  const switchBackground = useCallback(
    (e) => {
      if (sidebarElement.current === e.target) {
        toggleMenuResponsive();
      }
    },
    [toggleMenuResponsive]
  );

  return (
    <>
      {!navShow && (
        <div
          onClick={switchBackground}
          ref={sidebarElement}
          className="bg-[rgba(0,0,0,.35)] xl:hidden w-full h-screen fixed right-0 z-50"
        ></div>
      )}

      <aside
        className={`${
          navShow ? "-translate-x-[100%]" : "translate-x-[0%]  "
        } transition ease-out  duration-150 fixed w-full sm:max-w-[380px] xl:hidden h-screen bg-white dark:bg-secondary z-[51]`}
        aria-label="Sidebar"
      >
        <div className=" py-4 px-3 rounded flex flex-col h-full">
          <div className="flex items-center justify-between pl-2.5 mb-5 border-b-2 ">
            <div className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white ">
              <svg
                className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"></path>
              </svg>
              <span className="flex-1 ml-3 text-xl font-semibold whitespace-nowrap">Menú</span>
            </div>

            <button onClick={toggleMenuResponsive}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          <div className="md:hidden  border-b-2 pb-5">
            <Buscador width="w-full" />
          </div>
          <ul className="space-y-2">
            {links.map((link, index) => (
              <NavItemResponsive key={index} index={index} toggleMenuResponsive={toggleMenuResponsive} {...link} />
            ))}
          </ul>
          <div className="md:hidden justify-end flex pt-5">
            <ToggleDarkMode />
          </div>
        </div>
      </aside>
    </>
  );
};
