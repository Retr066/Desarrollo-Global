import { Route, Routes, useLocation } from "react-router-dom";
import { NavbarHome, Footer, LoginModal, BannerAnuncio, MenuCompras } from "../components";
import { Legal, NotFound } from "../pages";
import { routesHome } from "./routes";
import LayoutHomeProvider from "../context/LayoutHomeContext";
import { useCallback, useEffect, useState } from "react";

export const LayoutHome = () => {
  const { pathname } = useLocation();
  const [lastPathName] = useState(localStorage.getItem("pathname") || "/");
  const paths = ["/live"];
  const isContentPathName = (path) => paths.includes(path);

  const isParentPathName = (path) => pathname.includes(path) && !pathname.includes(`${path}/`);

  const savePathNameLocalStorage = useCallback(() => {
    localStorage.setItem("pathname", pathname);
  }, [pathname]);

  const scrollTopWithAnimation = () => {
    const scrollStep = -window.scrollY / (1000 / 30);

    const scrollInterval = setInterval(function () {
      if (window.scrollY !== 0) {
        window.scrollBy(0, scrollStep);
      } else clearInterval(scrollInterval);
    }, 15);
  };

  useEffect(() => {
    if (lastPathName !== pathname) {
      scrollTopWithAnimation();
      savePathNameLocalStorage();
    }
  }, [pathname, lastPathName, savePathNameLocalStorage]);

  return (
    <>
      <LayoutHomeProvider>
        <div className="font-sans transition-colors duration-150 bg-white dark:bg-secondary dark:text-white selection:bg-sky-300 selection:text-sky-900">
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
