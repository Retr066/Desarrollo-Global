import { Route, Routes } from "react-router-dom";
import { NavbarHome, Footer, LoginModal, BannerAnuncio } from "../components";
import { Legal, NotFound } from "../pages";
import { routesHome } from "./routes";
import ModalLoginProvider from "../context/ModalLoginContext";

export const LayoutHome = () => {
  return (
    <>
      <ModalLoginProvider>
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
          <LoginModal />
          <Footer />
        </div>
      </ModalLoginProvider>
    </>
  );
};
