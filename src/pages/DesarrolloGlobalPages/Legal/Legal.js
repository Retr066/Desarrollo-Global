import { Navigate, NavLink, Route, Routes } from "react-router-dom";
import { routesLegal } from "./routes";

import { Container } from "../../../Container";
import { useState } from "react";

const NavItem = ({ to, nombre }) => {
  return (
    <li className="text-lg font-black py-2 pr-[20px]">
      <NavLink
        to={to}
        className={({ isActive }) =>
          isActive
            ? "text-purple-600 dark:text-white border-l-[5px] border-purple-600 dark:border-white pl-6"
            : "text-gray-500 hover:text-purple-600 hover:dark:text-white px-3"
        }
      >
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
    <Container>
      <div className="font-nanito grid grid-cols-8 pt-7">
        <button className="lg:hidden col-span-8 flex text-center text-gray-400 font-extrabold text-lg" onClick={handleDesactivate}>
          <AbrirIcon /> <h1 className="ml-[15px]">Regresar</h1>
        </button>
        <div
          className={`col-span-2 xl:col-span-2 lg:block max-h-screen
            ${
              sidebar
                ? "block bg-white dark:bg-secondary lg:bg-transparent col-span-8 fixed lg:sticky z-20 lg:z-0 h-screen lg:h-auto w-full lg:w-auto pt-[100px] lg:pt-0 top-0 lg:top-0 left-0 lg:left-0 pl-[30px] lg:pl-0"
                : "top-[100px] hidden sticky"
            }`}
        >
          <h1 className="block font-black text-5xl mb-7">Legal</h1>
          <p className="uppercase text-sm text-gray-500 font">Contenido</p>
          <ul onClick={handleActivate}>
            {routesLegal.map(({ to, nombre }, index) => (
              <NavItem key={index} to={to} nombre={nombre} />
            ))}
          </ul>
        </div>
        <main className="col-span-8 xl:col-span-6 lg:col-span-6 text-justify pt-[20px] lg:pt-[70px]">
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
