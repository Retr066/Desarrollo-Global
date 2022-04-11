import React from "react";
import { NavLink, Route, Routes } from "react-router-dom";
import { Legal, NotFound } from "../pages";
import { routesHome } from "./routes";
export const LayoutHome = () => {
  return (
    <div>
      <h1>DesarrolloGlobal Page</h1>
      <ul>
        <li>
          <NavLink to="cursos">Cursos</NavLink>
        </li>
        <li>
          <NavLink to="diplomas">Diplomas</NavLink>
        </li>
        <li>
          <NavLink to="usuarios">Administrar Usuarios</NavLink>
        </li>
        <li>
          <NavLink to="legal">Legal</NavLink>
        </li>
      </ul>
      <Routes>
        {routesHome.map(({ path, Component }, index) => (
          <Route key={index} path={path} element={<Component />} />
        ))}
        <Route path="/legal/*" element={<Legal />} />
        <Route path="/*" element={<NotFound />} replace />
      </Routes>
    </div>
  );
};
