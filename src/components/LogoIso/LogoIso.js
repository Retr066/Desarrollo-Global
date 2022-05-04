import React from "react";
import certificadoIso from "../../assets/imgs/certificado-iso.png";
export const LogoIso = ({ className = "", style = {}, classNameImg = "max-w-[240px]" }) => {
  return (
    <picture className={`${className}`}>
      <img style={style} className={`w-full ${classNameImg}`} src={certificadoIso} alt="Certificado Iso 9001:2015" />
      <p>
        ISO 9001:2015 <span className="font-bold">COD N°. CO18.00048/U</span>
      </p>
    </picture>
  );
};
