import { useCallback, useState } from "react";
import { ButtonPrimary } from "../buttons";
import { ToggleDarkMode } from "../ToggleDarkMode";
import { links } from "./data";
import { LogoNavbar, NavListItem, CarritoDeCompras, Buscador, NavbarResponsivo, SpanMenu } from "./partials";

export const NavbarPrincipal = () => {
  const [navShow, setNavShow] = useState(true);
  const toggleMenuResponsive = useCallback(() => {
    setNavShow(!navShow);
  }, [navShow]);
  return (
    <>
      <div className="bg-transparent shadow fixed z-30 w-full backdrop-blur-[20px]">
        <div className="container mx-auto px-4">
          <nav className="flex items-center justify-between py-4">
            <div className="flex items-center">
              <SpanMenu toggleMenuResponsive={toggleMenuResponsive} />
              <LogoNavbar />
              <div className="hidden lg:hidden xl:flex xl:items-center">
                <NavListItem links={links} />
              </div>
            </div>

            <div className="hidden md:flex md:items-center">
              <Buscador />
              <CarritoDeCompras />
              <ToggleDarkMode />
              <ButtonPrimary>Inicia sesión</ButtonPrimary>
            </div>

            <div className="flex items-center md:hidden">
              <CarritoDeCompras />
              <ButtonPrimary>Entrar</ButtonPrimary>
            </div>
          </nav>
        </div>
      </div>

      <NavbarResponsivo navShow={navShow} links={links} toggleMenuResponsive={toggleMenuResponsive} />
    </>
  );
};
