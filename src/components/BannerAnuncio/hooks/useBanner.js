import { useCallback, useEffect, useState } from "react";
export const useBanner = () => {
  const [bannerVisible, setBannerVisible] = useState(sessionStorage.getItem("bannerVisible") || true);
  const [isShow, setIsShow] = useState(false);
  const [isAnimacionReady, setIsAnimacionReady] = useState(false);
  const delayedAnimacion = (tiempo, callback) => new Promise((resolve) => setTimeout(() => resolve(callback()), tiempo));
  const betterStringToBoolean = (string) =>
    string === "false" || string === "undefined" || string === "null" || string === "0" ? false : !!string;

  const cerrarBanner = async () => {
    await delayedAnimacion(0, () => setIsAnimacionReady(false));
    await delayedAnimacion(300, () => setIsShow(false));
    await delayedAnimacion(0, () => setBannerVisible(false));
  };

  const getBannerVisible = useCallback(async () => {
    if (betterStringToBoolean(bannerVisible)) {
      await delayedAnimacion(1000, () => setIsShow(true));
      await delayedAnimacion(100, () => setIsAnimacionReady(true));
    }
    sessionStorage.setItem("bannerVisible", bannerVisible);
  }, [bannerVisible]);

  useEffect(() => {
    getBannerVisible();
  }, [getBannerVisible]);

  return {
    bannerVisible,
    isShow,
    isAnimacionReady,
    cerrarBanner,
  };
};
