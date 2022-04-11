import { NavLink, Route, Routes } from "react-router-dom";
import { NotFound } from "../pages";
import { routesAula } from "./routes";

export const LayoutAula = () => {
  return (
    <div>
      <h1>Aula dashboard</h1>
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
        {routesAula.map(({ path, Component }, index) => (
          <Route key={index} path={path} element={<Component />} />
        ))}
        <Route path="/*" element={<NotFound />} replace />
      </Routes>
    </div>
  );
};

export default LayoutAula;
