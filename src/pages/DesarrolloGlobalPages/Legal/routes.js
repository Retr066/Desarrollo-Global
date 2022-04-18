import { PoliticaCalidad, PoliticasProteccionDatos, PoliticasCookies, TerminosServicio } from "./components";

export const routesLegal = [
  {
    to: "politicas-proteccion-datos",
    path: "/politicas-proteccion-datos",
    Component: PoliticasProteccionDatos,
    nombre: "Políticas de Proteccion de datos",
  },
  {
    to: "terminos-servicio",
    path: "/terminos-servicio",
    Component: TerminosServicio,
    nombre: "Términos y Servicio",
  },
  {
    to: "politicas-cookies",
    path: "/politicas-cookies",
    Component: PoliticasCookies,
    nombre: "Políticas de Cookies",
  },
  {
    to: "politica-calidad",
    path: "/politica-calidad",
    Component: PoliticaCalidad,
    nombre: "Políticas de Calidad",
  },
];
