import { useCallback, useEffect, useState } from "react";
import { ButtonInfo } from "../buttons";
export const BannerAnuncio = () => {
  const [bannerVisible, setBannerVisible] = useState(sessionStorage.getItem("bannerVisible") || true);
  const [isShow, setIsShow] = useState(false);
  const [isAnimacionReady, setIsAnimacionReady] = useState(false);
  const cerrarBanner = async () => {
    await delayedAnimacion(1, () => setIsAnimacionReady(false));
    await delayedAnimacion(200, () => setIsShow(false));
    await delayedAnimacion(1, () => setBannerVisible(false));
  };

  const delayedAnimacion = (tiempo, callback) => new Promise((resolve, _) => setTimeout(() => resolve(callback()), tiempo));

  const getBannerVisible = useCallback(async () => {
    if (bannerVisible === true) {
      await delayedAnimacion(500, () => setIsShow(true));
      await delayedAnimacion(1, () => setIsAnimacionReady(true));
    }
    sessionStorage.setItem("bannerVisible", bannerVisible);
  }, [bannerVisible]);

  useEffect(() => {
    getBannerVisible();
  }, [getBannerVisible]);

  return (
    <div className={`${!bannerVisible && "invisible opacity-0 absolute h-0 w-0"}`}>
      {isShow && (
        <section
          className={` ${
            isAnimacionReady ? "-translate-y-[0%]" : "-translate-y-[100%]"
          }  transition-all ease-linear  duration-200  w-full bg-danger border-blue-500 text-white`}
        >
          <div className="container mx-auto px-4 py-2">
            <div className="flex justify-center items-center" role="alert">
              <p className="font-bold text-lg tracking-tight">
                ¡Todo el Mes de Abril descuentos hasta el 50% dto en nuestro Cursos y Diplomas!
              </p>
              <ButtonInfo
                classSpan="font-bold"
                style={{
                  borderRadius: "0px",
                }}
              >
                Ver Oferta{" "}
              </ButtonInfo>
            </div>
            <button
              type="button"
              onClick={cerrarBanner}
              className=" p-1 ml-auto border-0 top-0 right-0 text-white  absolute text-3xl leading-none font-semibold outline-none focus:outline-none"
            >
              <span className=" h-6 w-6 text-2xl block outline-none focus:outline-none">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </span>
            </button>
          </div>
        </section>
      )}
    </div>
  );
};
