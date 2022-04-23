import React from "react";
import { contactosLinks, legalLinks } from "../data";
import { LinkList } from "./LinkList";

export const Accesos = () => {
  return (
    <div className="grid justify-items-start content-center grid-cols-1 xs:grid-cols-2 sm:grid-cols-3  gap-8 sm:gap-6 mt-8 lg:m-0 ">
      <div>
        <h2 className="mb-6 text-sm font-bold text-gray-900 uppercase dark:text-white">Contacta a DesarrolloGlobal</h2>
        <LinkList links={contactosLinks} />
      </div>
      <div>
        <h2 className="mb-6 text-sm font-bold text-gray-900 uppercase dark:text-white ">Dónde Estamos</h2>
        <div className="text-gray-600 dark:text-gray-400">
          <p className="font-bold">Oficina Administrativa</p>
          <p>Av. Julio C. Tello 741 Lince (01) 5556005</p>
        </div>
      </div>
      <div>
        <h2 className="mb-6 text-sm font-bold text-gray-900 uppercase dark:text-white">Enlaces de ayuda</h2>
        <LinkList links={legalLinks} />
      </div>
    </div>
  );
};
