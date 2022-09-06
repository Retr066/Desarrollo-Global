import { useState } from "react";
import { BotonImageTrailer, BotonPagar, FormCursoCard, HeaderCursoCard } from "./components";
export const AsideCursoCard = ({ setPlay, curso }) => {
  const [isVisible, setIsVisible] = useState(true);

  return (
    <div className="absolute inset-0 justify-center hidden h-full m-auto pointer-events-none lg:flex z-20">
      <div className="w-[784px]" />
      <div className="w-[368px] top-[24px] ">
        <div
          className={`${
            isVisible ? "top-0" : "top-24"
          } h-fit sticky overflow-hidden bg-white dark:bg-secondary rounded-lg pointer-events-auto z-5 md:mt-5  drop-shadow-lg `}
        >
          <BotonImageTrailer isVisible={isVisible} setIsVisible={setIsVisible} setPlay={setPlay} curso={curso} />
          <div className="border rounded-b-lg drop-shadow-lg ">
            <div className="flex flex-col ">
              <HeaderCursoCard curso={curso} />
              <div className="flex flex-col px-4">
                <p className="my-4 text-base text-center">Solicita Información y Obtén un {curso.descuento}% de Descuento</p>
                <FormCursoCard curso={curso} />
                <BotonPagar />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
