import React from "react";
import { Logo } from "../../Logo";
import { LogoIso } from "../../LogoIso";

export const Logos = () => {
  return (
    <div className="mb-6 md:mb-0 flex flex-col sm:flex-row gap-8 lg:block items-center  lg:mr-4  ">
      <div className="flex flex-col justify-center items-center ">
        <Logo tipo="link" style={{ minWidth: "auto", height: "100%" }} className="max-w-[340px]" />
        <p className="text-center font-semibold">Capacitación para Funcionarios y Servidores Públicos</p>
      </div>
      <LogoIso className="flex flex-col justify-center items-center " />
    </div>
  );
};
