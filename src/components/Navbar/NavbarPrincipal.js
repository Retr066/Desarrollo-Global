import React from "react";
import { useState } from "react";
import { NavLink } from "react-router-dom";

import { Sidebar, ToggleDarkMode, LogoNavbar } from "./partials";

const links = [
  {
    to: "/cursos",
    nombre: "Cursos",
    href: false,
  },
  {
    to: "/diplomas",
    nombre: "Diplomas",
    href: false,
  },
  {
    to: "/diplomados",
    nombre: "Diplomados",
    href: false,
  },
  {
    to: "/inhouse",
    nombre: "InHouse",
    href: false,
  },
  {
    to: "https://www.desarrolloglobal.pe/blog",
    nombre: "Blog",
    href: true,
  },
  {
    to: "/seminarios",
    nombre: "Seminarios",
    href: false,
  },
];

const NavItem = ({ to, nombre, href, className }) => {
  return (
    <li className={` text-sm font-semibold hover:text-purple-600 px-3 py-2 ${className}`}>
      {href === true ? (
        <a href={to} target="_blank" rel="noreferrer">
          {nombre}
        </a>
      ) : (
        <NavLink to={to}>{nombre}</NavLink>
      )}
    </li>
  );
};

const Search = () => {
  return (
    <div className="sm:hidden md:hidden lg:flex items-center rounded-lg  ">
      <input
        type="search"
        className="w-3/4 h-10 px-4 py-1 rounded-l-lg placeholder:text-xs text-dark  focus:outline-none"
        placeholder="¿Qué buscaremos hoy?"
      />

      <div>
        <button type="submit" className="flex items-center bg-primary justify-center w-10 h-10 text-white rounded-r-lg">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </button>
      </div>
    </div>
  );
};

const BuscadorResponsivo = () => {
  return (
    <div className="sm:flex md:flex lg:hidden ">
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
      </svg>
    </div>
  );
};

const IconoCarrito = () => {
  return (
    <button type="button" className="ml-2 sm:ml-2">
      <div className="flex items-center relative w-10 h-10">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
          />
        </svg>
        <div className="absolute flex items-center justify-center top-[-5px] right-1 h-5 w-5 my-1 border-2 border-white rounded-full bg-danger z-2">
          <b className="text-xs text-white">1</b>
        </div>
      </div>
    </button>
  );
};

export const NavbarPrincipal = () => {
  const [navShow, setNavShow] = useState(true);
  const toggleMenuResponsive = () => {
    setNavShow(!navShow);
  };
  return (
    <>
      <div className="bg-transparent shadow fixed z-[999] w-full backdrop-blur-[20px]">
        <div className="container mx-auto px-4">
          <nav className="flex items-center justify-between py-4">
            <div className="flex items-center">
              <div className="lg:block xl:hidden cursor-pointer mr-2" onClick={toggleMenuResponsive}>
                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-primary" viewBox="0 0 24 24">
                  <path
                    fill="currentColor"
                    d="M12.9499909,17 C12.7183558,18.1411202 11.709479,19 10.5,19 C9.29052104,19 8.28164422,18.1411202 8.05000906,17 L3.5,17 C3.22385763,17 3,16.7761424 3,16.5 C3,16.2238576 3.22385763,16 3.5,16 L8.05000906,16 C8.28164422,14.8588798 9.29052104,14 10.5,14 C11.709479,14 12.7183558,14.8588798 12.9499909,16 L20.5,16 C20.7761424,16 21,16.2238576 21,16.5 C21,16.7761424 20.7761424,17 20.5,17 L12.9499909,17 Z M18.9499909,12 C18.7183558,13.1411202 17.709479,14 16.5,14 C15.290521,14 14.2816442,13.1411202 14.0500091,12 L3.5,12 C3.22385763,12 3,11.7761424 3,11.5 C3,11.2238576 3.22385763,11 3.5,11 L14.0500091,11 C14.2816442,9.85887984 15.290521,9 16.5,9 C17.709479,9 18.7183558,9.85887984 18.9499909,11 L20.5,11 C20.7761424,11 21,11.2238576 21,11.5 C21,11.7761424 20.7761424,12 20.5,12 L18.9499909,12 Z M9.94999094,7 C9.71835578,8.14112016 8.70947896,9 7.5,9 C6.29052104,9 5.28164422,8.14112016 5.05000906,7 L3.5,7 C3.22385763,7 3,6.77614237 3,6.5 C3,6.22385763 3.22385763,6 3.5,6 L5.05000906,6 C5.28164422,4.85887984 6.29052104,4 7.5,4 C8.70947896,4 9.71835578,4.85887984 9.94999094,6 L20.5,6 C20.7761424,6 21,6.22385763 21,6.5 C21,6.77614237 20.7761424,7 20.5,7 L9.94999094,7 Z M7.5,8 C8.32842712,8 9,7.32842712 9,6.5 C9,5.67157288 8.32842712,5 7.5,5 C6.67157288,5 6,5.67157288 6,6.5 C6,7.32842712 6.67157288,8 7.5,8 Z M16.5,13 C17.3284271,13 18,12.3284271 18,11.5 C18,10.6715729 17.3284271,10 16.5,10 C15.6715729,10 15,10.6715729 15,11.5 C15,12.3284271 15.6715729,13 16.5,13 Z M10.5,18 C11.3284271,18 12,17.3284271 12,16.5 C12,15.6715729 11.3284271,15 10.5,15 C9.67157288,15 9,15.6715729 9,16.5 C9,17.3284271 9.67157288,18 10.5,18 Z"
                  />
                </svg>
              </div>
              <LogoNavbar />
              <div className="hidden lg:hidden xl:flex xl:items-center ">
                <ul className="flex space-x-1">
                  {links.map(({ to, nombre, href }, index) => (
                    <NavItem key={index} to={to} nombre={nombre} href={href} />
                  ))}
                </ul>
              </div>
            </div>

            <div className="hidden sm:flex sm:items-center">
              <BuscadorResponsivo />
              <Search />
              <IconoCarrito />
              <ToggleDarkMode />

              <a
                href="/"
                className="text-white bg-primary text-sm font-semibold border px-4 py-2 ml-2
                 rounded-lg hover:text-purple-600 hover:border-purple-600"
              >
                Inicia sesión
              </a>
            </div>
            <div className="flex items-center sm:hidden">
              <ToggleDarkMode />
              <BuscadorResponsivo />
              <IconoCarrito />
              <a
                href="/"
                className="text-white bg-primary text-sm font-semibold border px-4 py-2 rounded-lg hover:text-purple-600 hover:border-purple-600 ml-2"
              >
                Entrar
              </a>
            </div>
          </nav>
        </div>
        <Sidebar navShow={navShow} links={links} />
      </div>
    </>
  );
};
