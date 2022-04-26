import { Link } from "react-router-dom";

import logo from "../../assets/imgs/logo-DG.png";
import logoBlanco from "../../assets/imgs/logo-DG-blanco.png";
import { useContext } from "react";
import { ColorModeContext } from "../../context";

export const Logo = ({ tipo = "estatico", className = "", style = { minWidth: "auto" }, width = "200px" }) => {
  const { isDarkMode } = useContext(ColorModeContext);

  if (tipo === "estatico") {
    return (
      <>
        <img
          style={style}
          className={`min-w-[175px]  w-auto h-12 ${className}`}
          src={isDarkMode ? logoBlanco : logo}
          alt="Logo Desarrollo Global"
        />
      </>
    );
  }

  if (tipo === "link") {
    return (
      <Link to="/">
        <img
          style={style}
          className={`h-full w-full ${width} ${className}`}
          src={isDarkMode ? logoBlanco : logo}
          alt="Logo Desarrollo Global"
        />
      </Link>
    );
  }
  if (tipo === "reversa") {
    return (
      <>
        <img
          style={style}
          className={`min-w-[175px]  w-auto h-12 ${className}`}
          src={isDarkMode ? logo : logoBlanco}
          alt="Logo Desarrollo Global"
        />
      </>
    );
  }

  return (
    <>
      Tipo invalido solo <span className="text-primary">link o estatico o reversa</span>
    </>
  );
};
