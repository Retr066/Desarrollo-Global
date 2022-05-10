import { Route, Routes, useLocation } from "react-router-dom";
import { NavbarHome, Footer, LoginModal, BannerAnuncio, MenuCompras } from "../components";
import { Legal, NotFound } from "../pages";
import { routesHome } from "./routes";
import LayoutHomeProvider from "../context/LayoutHomeContext";

export const LayoutHome = () => {
  const { pathname } = useLocation();
  const paths = ["/live"];
  const isContentPathName = (path) => paths.includes(path);
  //como saber si estoy en una ruta padre con todas sus hijas
  const isParentPathName = (path) => pathname.includes(path) && !pathname.includes(`${path}/`);

  return (
    <>
      <LayoutHomeProvider>
        <div className="bg-white dark:bg-secondary dark:text-white font-sans transition-colors duration-150">
          {!isContentPathName(pathname) && <BannerAnuncio />}
          <NavbarHome className={`${isParentPathName("/legal/") ? "relative" : ""}`} />
          <Routes>
            {routesHome.map(({ path, Component }, index) => (
              <Route key={index} path={path} element={<Component />} />
            ))}
            <Route path="/legal/*" element={<Legal />} />
            <Route path="/*" element={<NotFound />} replace />
          </Routes>
          {!isContentPathName(pathname) && <Footer />}
          <LoginModal />
          <MenuCompras />
        </div>
      </LayoutHomeProvider>
    </>
  );
};
