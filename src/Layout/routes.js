import {
  Cursos,
  DesarrolloGlobal,
  Diplomados,
  Diplomas,
  Inhouse,
  Seminarios,
  LibroReclamaciones,
  CursosAdmin,
  AdministrarUsuarios,
  DiplomasAdmin,
  TabCursos,
  Aula,
  Live,
  Curso,
} from "../pages";

export const routesHome = [
  {
    path: "/",
    Component: DesarrolloGlobal,
  },
  {
    path: "/cursos",
    Component: Cursos,
  },
  {
    path: "/cursos/:slug",
    Component: Curso,
  },
  {
    path: "/diplomas",
    Component: Diplomas,
  },
  {
    path: "/diplomados",
    Component: Diplomados,
  },
  {
    path: "/inhouse",
    Component: Inhouse,
  },
  {
    path: "/seminarios",
    Component: Seminarios,
  },
  {
    path: "/libro-reclamaciones",
    Component: LibroReclamaciones,
  },
  {
    path: "/live",
    Component: Live,
  },
];

export const routesAdmin = [
  {
    path: "/",
    Component: AdministrarUsuarios,
  },
  {
    path: "/cursos",
    Component: CursosAdmin,
  },
  {
    path: "/diplomas",
    Component: DiplomasAdmin,
  },
];

export const routesAula = [
  {
    path: "/",
    Component: Aula,
  },
  {
    path: "/cursos",
    Component: TabCursos,
  },
];
