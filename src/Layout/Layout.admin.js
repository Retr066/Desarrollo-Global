import React from "react";
import { NavLink, Route, Routes } from "react-router-dom";
import { NotFound } from "../pages";
import { routesAdmin } from "./routes";
export const LayoutAdmin = () => {
  return (
    <>
      <h1>Administrador dashboard</h1>
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
      </ul>
      <Routes>
        {routesAdmin.map(({ path, Component }, index) => (
          <Route key={index} path={path} element={<Component />} />
        ))}
        <Route path="/*" element={<NotFound />} replace />
      </Routes>
    </>
  );
};

export default LayoutAdmin;
