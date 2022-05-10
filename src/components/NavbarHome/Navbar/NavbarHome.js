import { useCallback, useContext, useState } from "react";
import { Buscador } from "../../Buscador";
import { ButtonPrimary } from "../../buttons";
import { NavbarResponsivo } from "../NavbarResponsivo";
import { ToggleDarkMode } from "../../ToggleDarkMode";
import { links } from "../data";
import { NavListItem, CarritoDeCompras, SpanMenu, CarritoDeComprasV2 } from "./partials";
import { LayoutHomeContext } from "../../../context";
import { Logo } from "../../Logo";

export const NavbarHome = ({ className }) => {
  const { toggleVerModal, toggleMenuCompras } = useContext(LayoutHomeContext);
  const [navShow, setNavShow] = useState(true);
  const toggleMenuResponsive = useCallback(() => {
    setNavShow(!navShow);
  }, [navShow]);

  return (
    <>
      <div className={`${className ? className : "sticky"}  bg-transparent shadow  top-0 left-0 right-0 z-30 w-full backdrop-blur-[20px]`}>
        <div className="container mx-auto px-4">
          <nav className="flex items-center justify-between py-4">
            <div className="flex items-center">
              <SpanMenu toggleMenuResponsive={toggleMenuResponsive} />
              <Logo tipo="link" width="max-w-[180px]" />
              <div className="hidden lg:hidden xl:flex xl:items-center">
                <NavListItem links={links} />
              </div>
            </div>

            <div className="hidden md:flex md:items-center gap-4">
              <Buscador />
              <CarritoDeComprasV2 toggleMenuCompras={toggleMenuCompras} />
              <ToggleDarkMode />
              <ButtonPrimary onClick={toggleVerModal}>Inicia sesión</ButtonPrimary>
            </div>

            <div className="flex items-center md:hidden gap-2">
              <CarritoDeComprasV2 toggleMenuCompras={toggleMenuCompras} />
              <ButtonPrimary onClick={toggleVerModal}>Entrar</ButtonPrimary>
            </div>
          </nav>
        </div>
      </div>
      <NavbarResponsivo navShow={navShow} links={links} toggleMenuResponsive={toggleMenuResponsive} />
    </>
  );
};
