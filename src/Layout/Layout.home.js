import React from "react";
import { Route, Routes } from "react-router-dom";
import { NavbarPrincipal } from "../components";
import { Legal, NotFound } from "../pages";
import { routesHome } from "./routes";
export const LayoutHome = () => {
  return (
    <div className="bg-gray-100 font-sans w-full min-h-screen m-0">
      <NavbarPrincipal />

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
