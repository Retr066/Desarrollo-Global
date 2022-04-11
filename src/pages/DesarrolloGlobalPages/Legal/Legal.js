import { Navigate, NavLink, Route, Routes } from "react-router-dom";
import { routesLegal } from "./routes";
const PrimerComponent = routesLegal[0].Component;
export const Legal = () => {
  return (
    <div>
      <h1>Legal</h1>
      <h5>Contenido</h5>
      <ul>
        {routesLegal.map(({ to, name }, index) => (
          <li key={index}>
            <NavLink to={to}>{name}</NavLink>
          </li>
        ))}
      </ul>
      <main>
        <Routes>
          <Route index element={<PrimerComponent />} />
          {routesLegal.map(({ path, Component }, index) => (
            <Route key={index} path={path} element={<Component />} />
          ))}
          <Route path="/*" element={<Navigate to="/legal" />} replace />
        </Routes>
      </main>
    </div>
  );
};
