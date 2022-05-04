import gsap, { Power4 } from "gsap";
import { useEffect, useRef } from "react";
import { LogoIso } from "../../../../../components";
import { ButtonsSpanList } from "./components";

export const ImagenPresentacion = () => {
  const ImagenDerechaElement = useRef(null);
  const TituloElement = useRef(null);
  const SubtituloElement = useRef(null);
  const ButtonsElement = useRef(null);

  useEffect(() => {
    gsap.to(ButtonsElement.current, { y: 0, duration: 1, opacity: 1, ease: Power4.easeNone });
    gsap.to(SubtituloElement.current, { x: 0, duration: 1, opacity: 1, ease: Power4.easeNone });
    gsap.to(TituloElement.current, { y: 0, duration: 1, opacity: 1, ease: Power4.easeNone });
    gsap.to(ImagenDerechaElement.current, { x: 0, duration: 1, opacity: 1, ease: Power4.easeNone });
  }, []);
  return (
    <section className="flex h-[calc(100vh_-_9.6rem)]">
      <picture
        style={{
          backgroundImage: `url(https://s3-us-west-2.amazonaws.com/uploads-desarrolloglobal.pe/2022/03/fondo_portada_home-1%20%284%29.png)`,
          position: "absolute",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "right center",
          zIndex: "10",
          height: "inherit",
        }}
        className="w-full "
        alt="banner"
      />

      <div className="px-4  mx-auto max-w-[95%] xl:max-w-[85%]   flex z-20">
        <div className="py-10  lg:w-3/6 flex flex-col gap-4 text-white justify-evenly">
          <h1 ref={TituloElement} className="-translate-y-32 opacity-0  flex flex-col  text-4xl xl:text-5xl  font-extrabold">
            <label className="">Capacitación para</label>
            <span className="p-4 bg-danger text-white">Funcionarios y Servidores</span>
            <label className="">Públicos</label>
          </h1>

          <div ref={SubtituloElement} className="-translate-x-32 flex items-center">
            <img
              style={{
                color: "inherit",
              }}
              src="https://s3-us-west-2.amazonaws.com/uploads-desarrolloglobal.pe/2022/03/logo1%20%281%29.png"
              alt="icono-cohete"
            />
            <p className="text-2xl ml-4 font-semibold">Potencia tus Conocimientos y mejora tus oportunidades</p>
          </div>
          <ButtonsSpanList ref={ButtonsElement} className="translate-y-32 opacity-0 hidden sm:flex" />
        </div>
        <div ref={ImagenDerechaElement} className="translate-x-32 opacity-0 hidden lg:flex flex-col justify-end items-end w-3/6 ">
          <img
            className="w-[480px]"
            src="https://s3-us-west-2.amazonaws.com/uploads-desarrolloglobal.pe/2022/03/Mesa-de-trabajo-%E2%80%93-2.png"
            alt="banner promoción"
          />
          <LogoIso className="flex flex-col items-end text-white text-xs" />
        </div>
      </div>
    </section>
  );
};
