import { StarIcon } from "@heroicons/react/solid";
import { Container } from "../../../../../Container";

const comentarios = [
  {
    id: 1,
    nombre: "Juan Perez",
    fecha: "12/12/2020",
    comentario: "El mejor curso del mundo mundial y quisiera saber mas del programa para poder aprender mas",
  },
  {
    id: 2,
    nombre: "Juan Perez",
    fecha: "12/12/2020",
    comentario: "El mejor curso del mundo mundial y quisiera saber mas del programa para poder aprender mas",
  },
  {
    id: 3,
    nombre: "Juan Perez",
    fecha: "12/12/2020",
    comentario: "El mejor curso del mundo mundial y quisiera saber mas del programa para poder aprender mas",
  },
  {
    id: 4,
    nombre: "Juan Perez",
    fecha: "12/12/2020",
    comentario: "El mejor curso del mundo mundial y quisiera saber mas del programa para poder aprender mas",
  },
];

export const Comentarios = () => {
  return (
    <Container
      style={{
        maxWidth: "1152px",
      }}
      className="flex items-center justify-center lg:justify-start py-7 "
      classNameContent="bg-white dark:bg-secondary"
    >
      <div className="w-full  max-w-[744px]">
        <h3 className="font-extrabold text-xl mb-7">Opiniones de nuestros alumnos</h3>
        <ul className="relative shadow-lg  rounded-lg ">
          {comentarios.map((comentario) => {
            return (
              <li
                key={comentario.id}
                className="p-4 odd:bg-white dark:odd:bg-secondary-dark  dark:even:bg-secondary even:bg-slate-100 last:mb-0"
              >
                <div className="flex items-start justify-start">
                  <div className="rounded-full overflow-hidden flex-shrink-0  mr-4 hidden sm:block">
                    <div className="w-full h-full bg-black block max-w-full relative">
                      <picture className="flex w-16 h-16">
                        <img
                          className="object-cover w-full h-full block relative"
                          src="https://www.desarrolloglobal.pe/public/files/avatar.jpg"
                          alt="avatar"
                        />
                      </picture>
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <div className="flex flex-col items-start justify-center">
                        <p className="font-bold">
                          <span className="">Juan Perez</span>
                        </p>
                        <p className="flex text-gray-600 gap-4 ">
                          <span className="flex items-center text-gray-600">
                            <StarIcon className="w-4 h-4 text-yellow-500" />
                            <StarIcon className="w-4 h-4 text-yellow-500" />
                            <StarIcon className="w-4 h-4 text-yellow-500" />
                            <StarIcon className="w-4 h-4 text-yellow-500" />
                            <StarIcon className="w-4 h-4 text-yellow-500" />
                          </span>
                          <label className="text-sm dark:text-slate-400">Hace 2 meses</label>
                        </p>
                        <p className="mt-2">
                          buenas noches al momento super interesante, estoy 1 escuchando todo, y luego mirar el poder hacer cada receta
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </Container>
  );
};
