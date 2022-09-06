import { CheckIcon } from "@heroicons/react/solid";
import { IconReloj } from "../../../../../assets/svgs";
import { Container } from "../../../../../Container";

export const Horarios = () => {
  return (
    <Container
      style={{
        maxWidth: "1152px",
      }}
      className="flex items-center justify-center lg:justify-start py-7 "
      classNameContent="bg-white dark:bg-secondary"
    >
      <div className="w-full  max-w-[744px]">
        <div className="text-xl font-extrabold">Horarios y Frecuencia</div>
        <p className="mb-7">*Según disponibilidad del docente</p>
        <div className="flex gap-4">
          <IconReloj className="w-20 h-20 text-primary" />
          <div>
            <p>Las clases en vivo son los días:</p>
            <ul className="space-y-1">
              <li className="flex gap-2">
                <CheckIcon className="w-5 h-5 text-primary" /> <p>Viernes 13 de Mayo a partir de las 06:45 pm.</p>
              </li>
              <li className="flex gap-2">
                <CheckIcon className="w-5 h-5 text-primary" /> <p>Sábado 14 de Mayo a partir de las 09:30 am.</p>
              </li>
              <li className="flex gap-2">
                <CheckIcon className="w-5 h-5 text-primary" /> <p>Martes 17 de Mayo a partir de las 06:45 pm.</p>
              </li>
              <li className="flex gap-2">
                <CheckIcon className="w-5 h-5 text-primary" /> <p>Jueves 19 de Mayo a partir de las 06:45 pm.</p>
              </li>
              <li className="flex gap-2">
                <CheckIcon className="w-5 h-5 text-primary" /> <p>Sábado 21 de Mayo a partir de las 09:30 am.</p>
              </li>
              <li className="flex gap-2">
                <CheckIcon className="w-5 h-5 text-primary" /> <p>Martes 24 de Mayo a partir de las 06:45 pm.</p>
              </li>
              <li className="flex gap-2">
                <CheckIcon className="w-5 h-5 text-primary" /> <p>Jueves 26 de Mayo a partir de las 06:45 pm.</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </Container>
  );
};
