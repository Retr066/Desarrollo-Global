import { Link } from "react-router-dom";

import logo from "../../assets/imgs/logo-DG.png";
import logoBlanco from "../../assets/imgs/logo-DG-blanco.png";
import { useContext } from "react";
import { ColorModeContext } from "../../context";

export const Logo = ({ tipo = "estatico", className = "", style }) => {
  const { isDarkMode } = useContext(ColorModeContext);

  if (tipo === "estatico") {
    return (
      <>
        <img style={style} className={`min-w-max h-12 ${className}`} src={isDarkMode ? logoBlanco : logo} alt="Logo Desarrollo Global" />
      </>
    );
  }

  if (tipo === "link") {
    return (
      <Link to="/">
        <img style={style} className={`min-w-max h-12 ${className}`} src={isDarkMode ? logoBlanco : logo} alt="Logo Desarrollo Global" />
      </Link>
    );
  }

  return (
    <>
      Tipo invalido solo <span className="text-primary">link o estatico</span>
    </>
  );
};
