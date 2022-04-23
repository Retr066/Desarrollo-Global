import { ButtonClose } from "../buttons";
import { useBanner } from "./hooks";
import { BannerInformacion } from "./partials";
export const BannerAnuncio = () => {
  const { isShow, isAnimacionReady, bannerVisible, cerrarBanner } = useBanner();

  return (
    <div className={`${!bannerVisible && "invisible opacity-0 absolute h-0 w-0"}`}>
      {isShow && (
        <section
          className={` ${
            isAnimacionReady ? "-translate-y-[0%]" : "-translate-y-[100%]"
          }  transition ease-linear  duration-200  w-full bg-danger  text-white`}
        >
          <div className="container mx-auto px-4 py-2">
            <BannerInformacion />
            <ButtonClose className="text-white" onClick={cerrarBanner} />
          </div>
        </section>
      )}
    </div>
  );
};
