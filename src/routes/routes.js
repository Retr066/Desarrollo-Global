import { lazy } from "react";
import { LayoutHome } from "../Layout";

const LayoutAdmin = lazy(() => import("../Layout/Layout.admin"));
const LayoutAula = lazy(() => import("../Layout/Layout.aula"));

export const routes = [
  {
    path: "/*",
    Component: LayoutHome,
  },
  {
    path: "/admin/*",
    Component: LayoutAdmin,
  },
  {
    path: "/aula/*",
    Component: LayoutAula,
  },
];
