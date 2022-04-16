import { Link } from "react-router-dom";

import logo from "../../../assets/imgs/logo-DG.png";
import logoBlanco from "../../../assets/imgs/logo-DG-blanco.png";
import { useContext } from "react";
import { ColorModeContext } from "../../../context";

export const LogoNavbar = () => {
  const { isDarkMode } = useContext(ColorModeContext);

  return (
    <>
      <Link className="min-w-max h-12" to="/">
        <img className="min-w-max h-12" src={isDarkMode ? logoBlanco : logo} alt="Logo Desarrollo Global" />
      </Link>
    </>
  );
};
