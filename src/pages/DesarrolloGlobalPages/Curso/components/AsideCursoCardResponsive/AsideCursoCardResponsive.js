import { ChevronUpIcon } from "@heroicons/react/solid";
import { useState } from "react";
import { BotonPagar, FormCursoCard, HeaderCursoCard } from "../AsideCursoCard/components";

export const AsideCursoCardResponsive = ({ curso }) => {
  const [show, setShow] = useState(false);
  return (
    <div className="fixed bottom-0 left-0 flex flex-col items-center justify-center w-full gap-3 p-2 text-center bg-white border-t border-solid drop-shadow-lg lg:hidden dark:bg-secondary z-5 border-gray-light">
      <button
        onClick={() => setShow((prev) => !prev)}
        className="flex items-center justify-center w-full gap-4 mx-auto transition duration-150 ease-in-out"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#collapseCursoCard"
        aria-expanded="false"
        aria-controls="collapseCursoCard"
      >
        <ChevronUpIcon className={`w-6 h-6 text-primary transition duration-150 ease-in-out ${show ? "rotate-180" : "rotate-0"} `} />
        {show ? "Ocultar" : "Ver más"}
      </button>
      <div className="w-full collapse sm:max-w-lg " id="collapseCursoCard">
        <HeaderCursoCard curso={curso} />
        <div className="py-2 sm:px-2 sm:shadow-lg">
          <FormCursoCard curso={curso} />
          <BotonPagar
            style={{
              width: "100%",
              marginBottom: "0px",
            }}
          />
        </div>
      </div>
    </div>
  );
};
