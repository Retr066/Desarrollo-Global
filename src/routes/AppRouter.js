import React, { Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { NavbarPrincipal } from "../components";

import { routes } from "./routes";

export const AppRouter = () => {
  return (
    <>
      <NavbarPrincipal />
      <Suspense fallback={<h1>Loading....</h1>}>
        <BrowserRouter>
          <Routes>
            {routes.map(({ path, Component }, index) => (
              <Route key={index} path={path} element={<Component />} />
            ))}

            <Route path="/*" element={<h1> error</h1>} replace />
          </Routes>
        </BrowserRouter>
      </Suspense>
    </>
  );
};
