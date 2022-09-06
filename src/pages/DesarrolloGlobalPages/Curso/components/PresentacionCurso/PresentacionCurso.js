import { CheckCircleIcon } from "@heroicons/react/solid";
import { Container } from "../../../../../Container";

export const PresentacionCurso = () => {
  return (
    <Container
      style={{
        maxWidth: "1152px",
      }}
      className="flex items-center justify-center lg:justify-start py-7"
      classNameContent="bg-slate-200 dark:bg-secondary-dark"
    >
      <div className="w-full  max-w-[744px]  ">
        <h5 className="mb-2 text-xl font-extrabold ">Presentación del Curso</h5>
        <p className="mb-7">
          El objetivo del curso es contribuir al fortalecimiento de las capacidades y habilidades técnicas del participante en planeamiento
          estratégico aplicado al Sector Público según los lineamientos del Centro Nacional de Planeamiento Estratégico – CEPLAN,
          comprendiendo el Sistema Nacional de Planeamiento Estratégico y su relación con el ejercicio de una gestión pública orientada a
          resultados.
        </p>
        <h5 className="mb-2 text-xl font-extrabold ">¿Cómo son la clases?</h5>
        <ul className="pl-5 space-y-1 ">
          <li className="flex items-center gap-2">
            <CheckCircleIcon className="w-5 h-5 text-primary" /> <p>Virtuales en vivo, vía plataforma.</p>
          </li>
          <li className="flex items-center gap-2">
            <CheckCircleIcon className="w-5 h-5 text-primary" /> <p>100% práctico.</p>
          </li>
          <li className="flex items-center gap-2">
            <CheckCircleIcon className="w-5 h-5 text-primary" /> <p>Clases interactivas de preguntas y respuestas.</p>
          </li>
        </ul>
      </div>
    </Container>
  );
};
