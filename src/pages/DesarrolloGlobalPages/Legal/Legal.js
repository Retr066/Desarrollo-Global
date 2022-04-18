import { Navigate, NavLink, Route, Routes } from "react-router-dom";
import { routesLegal } from "./routes";

import { Container } from "../../../components/Container/Container";
import { useState } from "react";

const NavItem = ({ to, nombre }, index) => {
  return (
    <li className="text-lg font-black py-2 pr-[20px]">
      <NavLink role="button"
        exact
        to={to}
        className={({ isActive }) =>
          isActive ? "text-purple-600 dark:text-white border-l-[5px] border-purple-600 dark:border-white pl-6" : "text-gray-500 hover:text-purple-600 px-3"
        }
      >
        {nombre}
      </NavLink>
    </li>
  );
};

const PrimerComponent = routesLegal[0].path;

const CloseIcon = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
      <path stroke-linecap="round" stroke-linejoin="round" d="M11 15l-3-3m0 0l3-3m-3 3h8M3 12a9 9 0 1118 0 9 9 0 01-18 0z" />
    </svg>
  )
}

const AbrirIcon = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
      <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
    </svg>
  )
}

export const Legal = () => {

  const [ sidebar, setSidebar ] = useState(false)

  window.addEventListener("scroll", function () {
    const header = document.querySelector(".todo")
    header.classList.toggle("active", window.screenY > 200)
  })

  const handleActivate = () => setSidebar(false)
  const handleDesactivate = () => setSidebar(!sidebar)

  return (
    <Container>
      <div className="font-nanito grid grid-cols-8 pt-7">
        <button className='block lg:hidden' onClick={ handleActivate }>
            { sidebar ? <CloseIcon /> : <AbrirIcon /> }
        </button>
        <div className="hidden col-span-2 xl:col-span-2 lg:block max-h-screen sticky top-[100px]">
          <h1 className="block font-black text-5xl mb-7">Legal</h1>
          <p className="uppercase text-sm text-gray-500 font">Contenido</p>
          <ul>
            {routesLegal.map(({ to, nombre }, index) => (
              <NavItem key={index} to={to} nombre={nombre} />
            ))}
          </ul>
        </div>
        <main className="col-span-8 xl:col-span-6 lg:col-span-6">
          <Routes>
            <Route
              index
              path="/"
              element={<Navigate to={`/legal${PrimerComponent}`} />}
            />
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
