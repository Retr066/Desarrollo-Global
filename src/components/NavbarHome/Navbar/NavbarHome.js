import { useCallback, useContext, useState } from "react";
import { Buscador } from "../../Buscador";
import { ButtonPrimary } from "../../buttons";
import { NavbarResponsivo } from "../NavbarResponsivo";
import { ToggleDarkMode } from "../../ToggleDarkMode";
import { links } from "../data";
import { NavListItem, CarritoDeCompras, SpanMenu } from "./partials";
import { ModalLoginContext } from "../../../context";
import { Logo } from "../../Logo";

export const NavbarHome = () => {
  const [navShow, setNavShow] = useState(true);
  const { toggleVerModal } = useContext(ModalLoginContext);

  const toggleMenuResponsive = useCallback(() => {
    setNavShow(!navShow);
  }, [navShow]);

  return (
    <>
      <div className="bg-transparent shadow sticky top-0 left-0 right-0 z-30 w-full backdrop-blur-[20px]">
        <div className="container mx-auto px-4">
          <nav className="flex items-center justify-between py-4">
            <div className="flex items-center">
              <SpanMenu toggleMenuResponsive={toggleMenuResponsive} />
              <Logo tipo="link" />
              <div className="hidden lg:hidden xl:flex xl:items-center">
                <NavListItem links={links} />
              </div>
            </div>

            <div className="hidden md:flex md:items-center">
              <Buscador />
              <CarritoDeCompras />
              <ToggleDarkMode />
              <ButtonPrimary className="ml-2" onClick={toggleVerModal}>
                Inicia sesión
              </ButtonPrimary>
            </div>

            <div className="flex items-center md:hidden">
              <CarritoDeCompras />
              <ButtonPrimary onClick={toggleVerModal}>Entrar</ButtonPrimary>
            </div>
          </nav>
        </div>
      </div>
      <NavbarResponsivo navShow={navShow} links={links} toggleMenuResponsive={toggleMenuResponsive} />
    </>
  );
};
