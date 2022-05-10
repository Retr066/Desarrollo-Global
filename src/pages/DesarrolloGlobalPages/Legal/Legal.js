import { Navigate, NavLink, Route, Routes } from "react-router-dom";
import { routesLegal } from "./routes";

import { Container } from "../../../Container";
import { useState } from "react";

const NavItem = ({ to, nombre, handleActivate }) => {
  return (
    <li className="text-lg font-black py-2 pr-[20px]">
      <NavLink
        to={to}
        onClick={handleActivate}
        className={({ isActive }) =>
          isActive
            ? "block text-purple-600 dark:text-white border-l-[5px] border-purple-600 dark:border-white pl-3"
            : "block text-gray-500 hover:text-purple-600 hover:dark:text-white px-3"
        }
      >
        {nombre}
      </NavLink>
    </li>
  );
};

const NavItemResponsive = ({ to, nombre, index, handleActivate }) => {
  return (
    <li className={`${index >= 1 && "border-t"} text-lg font-black py-4 pr-[20px]`}>
      <NavLink to={to} onClick={handleActivate} className="block text-gray-500 hover:text-purple-600 hover:dark:text-white px-3">
        {nombre}
      </NavLink>
    </li>
  );
};

const PrimerComponent = routesLegal[0].path;

const AbrirIcon = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 stroke-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M11 15l-3-3m0 0l3-3m-3 3h8M3 12a9 9 0 1118 0 9 9 0 01-18 0z" />
    </svg>
  );
};

export const Legal = () => {
  const [sidebar, setSidebar] = useState(false);

  const handleActivate = () => setSidebar(false);
  const handleDesactivate = () => setSidebar(!sidebar);

  return (
    <Container className="min-h-screen pt-5">
      <div className="flex flex-col md:flex-row ">
        {!sidebar && (
          <button className="md:hidden col-span-8 flex text-center text-gray-400 font-extrabold text-lg" onClick={handleDesactivate}>
            <AbrirIcon /> <span className="ml-[15px]">Regresar</span>
          </button>
        )}
        <aside className="w-1/3 sticky top-0 h-fit ">
          <div className={`hidden md:flex md:flex-col sticky w-full pt-10  `}>
            <h1 className="block font-black text-5xl mb-7">Legal</h1>
            <p className="uppercase text-sm text-gray-500 font">Contenido</p>
            <ul>
              {routesLegal.map(({ to, nombre }, index) => (
                <NavItem key={index} to={to} nombre={nombre} handleActivate={handleActivate} />
              ))}
            </ul>
          </div>
        </aside>
        {sidebar && (
          <aside className={`flex flex-col md:hidden w-full max-h-screen pt-10 `}>
            <h1 className="block font-black text-5xl mb-7">Legal</h1>
            <p className="uppercase text-sm text-gray-500 font">Contenido</p>
            <ul>
              {routesLegal.map(({ to, nombre }, index) => (
                <NavItemResponsive key={index} to={to} index={index} nombre={nombre} handleActivate={handleActivate} />
              ))}
            </ul>
          </aside>
        )}
        <main
          className={`${sidebar && "hidden"} md:block w-full col-span-8 xl:col-span-6 lg:col-span-6 text-justify pt-[20px] lg:pt-[70px]`}
        >
          <Routes>
            <Route index path="/" element={<Navigate to={`/legal${PrimerComponent}`} />} />
            {routesLegal.map(({ path, Component }, index) => (
              <Route key={index} path={path} element={<Component />} />
            ))}
            <Route path="/*" element={<Navigate to="/legal" />} replace />
          </Routes>
        </main>
      </div>
    </Container>
  );
};
