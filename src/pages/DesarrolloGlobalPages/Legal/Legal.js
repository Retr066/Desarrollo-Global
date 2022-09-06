import { Navigate, NavLink, Route, Routes } from "react-router-dom";
import { routesLegal } from "./routes";

import { Container } from "../../../Container";
import { useRef, useState } from "react";

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
      <NavLink to={to} onClick={handleActivate} className="block px-3 text-gray-500 hover:text-purple-600 hover:dark:text-white">
        {nombre}
      </NavLink>
    </li>
  );
};

const PrimerComponent = routesLegal[0].path;

const AbrirIcon = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 stroke-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M11 15l-3-3m0 0l3-3m-3 3h8M3 12a9 9 0 1118 0 9 9 0 01-18 0z" />
    </svg>
  );
};

export const Legal = () => {
  const [sidebar, setSidebar] = useState(false);
  const [buttonView, setButtonView] = useState(false);
  const handleActivate = () => setSidebar(false);
  const handleDesactivate = () => setSidebar(!sidebar);
  const buttonElement = useRef(null);

  const scrollFunction = () => {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      setButtonView(true);
    } else {
      setButtonView(false);
    }
  };

  window.onscroll = () => {
    scrollFunction();
  };

  const backToTopWithAnimation = () => {
    const scrollStep = -window.scrollY / (1000 / 30);
    const scrollInterval = setInterval(function () {
      if (window.scrollY !== 0) {
        window.scrollBy(0, scrollStep);
      } else clearInterval(scrollInterval);
    }, 15);
  };

  return (
    <Container className="min-h-screen pt-5">
      <div className="flex flex-col md:flex-row ">
        {!sidebar && (
          <button className="flex col-span-8 text-lg font-extrabold text-center text-gray-400 md:hidden" onClick={handleDesactivate}>
            <AbrirIcon /> <span className="ml-[15px]">Regresar</span>
          </button>
        )}
        <aside className="sticky top-0 w-1/3 h-fit ">
          <div className={`hidden md:flex md:flex-col sticky w-full pt-10  `}>
            <h1 className="block text-5xl font-black mb-7">Legal</h1>
            <p className="text-sm text-gray-500 uppercase font">Contenido</p>
            <ul>
              {routesLegal.map(({ to, nombre }, index) => (
                <NavItem key={index} to={to} nombre={nombre} handleActivate={handleActivate} />
              ))}
            </ul>
          </div>
        </aside>
        {sidebar && (
          <aside className={`flex flex-col md:hidden w-full max-h-screen pt-10 `}>
            <h1 className="block text-5xl font-black mb-7">Legal</h1>
            <p className="text-sm text-gray-500 uppercase font">Contenido</p>
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
          <button
            onClick={backToTopWithAnimation}
            ref={buttonElement}
            type="button"
            data-mdb-ripple="true"
            data-mdb-ripple-color="light"
            className={`${
              buttonView ? "opacity-100" : "opacity-0"
            } p-3 animate-bounce bg-primary text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-primary-light hover:shadow-lg focus:bg-primary-light focus:shadow-lg focus:outline-none focus:ring-0 active:bg-primary active:shadow-lg transition duration-150 ease-in-out bottom-5 right-5 fixed`}
            id="btn-back-to-top"  
          >
            <svg
              aria-hidden="true"
              focusable="false"
              data-prefix="fas"
              className="w-4 h-4"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
            >
              <path
                fill="currentColor"
                d="M34.9 289.5l-22.2-22.2c-9.4-9.4-9.4-24.6 0-33.9L207 39c9.4-9.4 24.6-9.4 33.9 0l194.3 194.3c9.4 9.4 9.4 24.6 0 33.9L413 289.4c-9.5 9.5-25 9.3-34.3-.4L264 168.6V456c0 13.3-10.7 24-24 24h-32c-13.3 0-24-10.7-24-24V168.6L69.2 289.1c-9.3 9.8-24.8 10-34.3.4z"
              ></path>
            </svg>
          </button>
        </main>
      </div>
    </Container>
  );
};
