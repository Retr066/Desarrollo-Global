import React from "react";
import { Route, Routes } from "react-router-dom";
import { NavbarPrincipal, Footer, LoginModal } from "../components";
import { Legal, NotFound } from "../pages";
import { routesHome } from "./routes";
export const LayoutHome = () => {
  return (
    <div className="bg-white dark:bg-secondary dark:text-white font-sans">
      <NavbarPrincipal />
      <Routes>
        {routesHome.map(({ path, Component }, index) => (
          <Route key={index} path={path} element={<Component />} />
        ))}
        <Route path="/legal/*" element={<Legal />} />
        <Route path="/*" element={<NotFound />} replace />
      </Routes>
      <LoginModal />
      <Footer />
    </div>
  );
};
