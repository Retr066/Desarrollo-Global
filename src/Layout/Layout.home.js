import React, { useCallback, useState } from "react";
import { Route, Routes } from "react-router-dom";
import { NavbarHome, Footer, LoginModal, BannerAnuncio } from "../components";
import { Legal, NotFound } from "../pages";
import { routesHome } from "./routes";

import { ModalLoginContext } from "../context";
export const LayoutHome = () => {
  const [verModal, setVerModal] = useState(false);
  const toggleVerModal = useCallback(() => {
    setVerModal(!verModal);
  }, [verModal]);

  return (
    <>
      <ModalLoginContext.Provider value={{ verModal, toggleVerModal }}>
        <div className="bg-white dark:bg-secondary dark:text-white font-sans">
          <BannerAnuncio />
          <NavbarHome />
          <Routes>
            {routesHome.map(({ path, Component }, index) => (
              <Route key={index} path={path} element={<Component />} />
            ))}
            <Route path="/legal/*" element={<Legal />} />
            <Route path="/*" element={<NotFound />} replace />
          </Routes>
          <LoginModal verModal={verModal} toggleVerModal={toggleVerModal} />
          <Footer />
        </div>
      </ModalLoginContext.Provider>
    </>
  );
};
