import { Route, Routes, useLocation } from "react-router-dom";
import { NavbarHome, Footer, LoginModal, BannerAnuncio } from "../components";
import { Legal, NotFound } from "../pages";
import { routesHome } from "./routes";
import ModalLoginProvider from "../context/ModalLoginContext";

export const LayoutHome = () => {
  const { pathname } = useLocation();
  const paths = ["/live"];
  const isContentPathName = (path) => paths.includes(path);

  return (
    <>
      <ModalLoginProvider>
        <div className="bg-white dark:bg-secondary dark:text-white font-sans transition-colors duration-150">
          {!isContentPathName(pathname) && <BannerAnuncio />}
          <NavbarHome />
          <Routes>
            {routesHome.map(({ path, Component }, index) => (
              <Route key={index} path={path} element={<Component />} />
            ))}
            <Route path="/legal/*" element={<Legal />} />
            <Route path="/*" element={<NotFound />} replace />
          </Routes>
          <LoginModal />
          {!isContentPathName(pathname) && <Footer />}
        </div>
      </ModalLoginProvider>
    </>
  );
};
