import { Container } from "../../../../../Container";
import { beneficios } from "./data";

export const Beneficios = () => {
  return (
    <Container
      style={{
        maxWidth: "1152px",
      }}
      className="flex items-center justify-center lg:justify-start py-7 "
      classNameContent="bg-white dark:bg-secondary"
    >
      <div className="w-full  max-w-[744px]  ">
        <h3 className="font-extrabold text-xl">Beneficios del Curso</h3>
        <p className="mb-7 text-base">¿Porque Capacitarte en Desarrollo Global?</p>
        {beneficios.map(({ Icon, descripcion, id, titulo }) => (
          <div key={id} className="grid grid-cols-10 gap-4 items-center justify-items-start mb-7 ">
            <Icon />
            <div className="col-span-10 sm:col-span-9 w-full bg-slate-100 dark:bg-secondary-dark p-4 rounded-lg">
              <h5 className="text-lg font-bold">{titulo}</h5>
              <p className="">{descripcion}</p>
            </div>
          </div>
        ))}
      </div>
    </Container>
  );
};
