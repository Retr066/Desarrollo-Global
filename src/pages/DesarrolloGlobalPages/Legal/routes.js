import { PoliticaCalidad, PoliticasProteccionDatos, PoliticasCookies, TerminosServicio } from "./components";

export const routesLegal = [
  {
    to: "politicas-proteccion-datos",
    path: "/politicas-proteccion-datos",
    Component: PoliticasProteccionDatos,
    name: "politicas-proteccion-datos",
  },
  {
    to: "terminos-servicio",
    path: "/terminos-servicio",
    Component: TerminosServicio,
    name: "terminos-servicio",
  },
  {
    to: "politicas-cookies",
    path: "/politicas-cookies",
    Component: PoliticasCookies,
    name: "politicas-cookies",
  },
  {
    to: "politica-calidad",
    path: "/politica-calidad",
    Component: PoliticaCalidad,
    name: "politica-calidad",
  },
];
