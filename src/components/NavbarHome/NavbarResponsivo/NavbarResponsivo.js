import { useCallback, useRef } from "react";
import { ToggleDarkMode } from "../../ToggleDarkMode";
import { Buscador } from "../../Buscador";
import { MenuTitulo, NavListItems } from "./partials";

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
          className="bg-[rgba(0,0,0,.35)] inset-0 xl:hidden w-full h-screen fixed right-0 z-50"
        ></div>
      )}

      <aside
        className={`${
          navShow ? "-translate-x-[120%]" : "translate-x-[0%]"
        } transition ease-out inset-0  duration-300 fixed w-full sm:max-w-[380px] xl:hidden h-screen bg-white dark:bg-secondary z-[51]`}
        aria-label="Sidebar"
      >
        <div className=" py-4 px-3 rounded flex flex-col h-full">
          <MenuTitulo toggleMenuResponsive={toggleMenuResponsive} />
          <div className="md:hidden  border-b pb-5">
            <Buscador width="w-full" />
          </div>
          <NavListItems links={links} toggleMenuResponsive={toggleMenuResponsive} />
          <div className="md:hidden justify-end flex pt-5">
            <ToggleDarkMode />
          </div>
        </div>
      </aside>
    </>
  );
};
