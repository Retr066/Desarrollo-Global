import { Link, useParams } from "react-router-dom";
import { obtenerCursoPorSlug } from "../../../utils";
import { NotFound } from "../NotFound";
import { Container } from "../../../Container";
import { Temario } from "./components";
import { AtSymbolIcon, DeviceMobileIcon, UserIcon } from "@heroicons/react/outline";
import { ButtonPrimary } from "../../../components";
export const Curso = () => {
  const { slug } = useParams();
  const curso = obtenerCursoPorSlug(slug);
  if (!curso) {
    return <NotFound />;
  }

  return (
    <Container className="py-5">
      <div className="flex w-full">
        <div className="w-2/3 px-3">
          <div>
            <h1 className="mb-4 text-4xl font-bold">{curso.titulo}</h1>
            <p className="text-body-color">{curso.descripcion}</p>
          </div>
          <Temario />
        </div>
        <div className="w-1/3 px-3">
          <img src={curso.image} alt={curso.titulo} className="w-full" />
          <div className="border rounded-b-lg drop-shadow-lg">
            <div className="flex flex-col ">
              <div className="flex items-center justify-around py-4 bg-yellow-100">
                <div className="flex items-center gap-3 px-2 py-1 text-white rounded-lg bg-danger">
                  <p className="text-4xl font-normal">{curso.descuento}%</p>
                  <div className="flex flex-col">
                    <p className="text-sm">Normal</p>
                    <span className="text-sm italic line-through ">S/{curso.precioSinDescuento.toFixed(2)}</span>
                  </div>
                </div>
                <p className="text-3xl font-bold">S/{curso.precioConDescuento.toFixed(2)}</p>
              </div>
              <div className="flex flex-col px-4">
                <p className="py-4 text-base text-center">Solicita Información y Obtén un {curso.descuento}% de Descuento</p>
                <form className="flex flex-col">
                  <div className="flex items-center px-3 py-2 mb-6 bg-white border-2 rounded-lg form-control focus-within:text-gray-400 focus-within:bg-white focus-within:border-primary">
                    <UserIcon className="w-5 h-5 text-gray-400" />
                    <input
                      type="text"
                      name="nombre"
                      placeholder="Ingresa tu nombre"
                      className="w-full pl-2 text-gray-400 border-none outline-none"
                      pattern="[a-zA-Z]*"
                      minLength={3}
                      maxLength={150}
                      autoComplete="off"
                      required
                    />
                  </div>
                  <div className="flex items-center px-3 py-2 mb-6 bg-white border-2 rounded-lg form-control focus-within:text-gray-400 focus-within:bg-white focus-within:border-primary">
                    <AtSymbolIcon className="w-5 h-5 text-gray-400" />

                    <input
                      className="w-full pl-2 text-gray-400 border-none outline-none "
                      minLength={3}
                      maxLength={150}
                      pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                      type="email"
                      name="email"
                      autoComplete="new-password"
                      placeholder="Ingresa tu correo Electrónico"
                      required
                    />
                  </div>
                  <div className="flex items-center px-3 py-2 mb-6 bg-white border-2 rounded-lg form-control focus-within:text-gray-400 focus-within:bg-white focus-within:border-primary ">
                    <DeviceMobileIcon className="w-5 h-5 text-gray-400" />
                    {/* input type tel solo acepte números */}

                    <input
                      className="w-full pl-2 text-gray-400 border-none outline-none"
                      type="tel"
                      name="telefono"
                      autoComplete="new-password"
                      placeholder="Ingresa tu numero de teléfono"
                      pattern="[9]{1}[0-9]{8}"
                      minLength={9}
                      maxLength={9}
                      onKeyDown={(e) => {
                        if ((e.keyCode < 48 || e.keyCode > 57) && (e.keyCode < 96 || e.keyCode > 105) && e.keyCode !== 8) {
                          e.preventDefault();
                        }
                      }}
                      required
                    />
                  </div>
                  <div className="mb-6 form-group">
                    <textarea
                      className="form-control block w-full px-3 py-1.5 text-base font-normal  text-gray-400 
                    bg-white bg-clip-padding resize-none border border-solid border-gray-300  rounded transition  ease-in-out m-0 focus:text-gray-400 focus:bg-white focus:border-primary focus:outline-none"
                      name="mensaje"
                      rows="3"
                      placeholder="Escribe tu mensaje"
                      required
                      minLength={10}
                      maxLength={255}
                      autoComplete="off"
                      pattern="[a-zA-Z0-9]*"
                      value={`Hola estoy interesad@, en el Curso: ${curso.titulo} gracias.`}
                      onChange={() => {}}
                    />
                  </div>
                  <div className="mb-6 text-center form-group form-check">
                    <input
                      type="checkbox"
                      className="w-4 h-4 mt-1 mr-2 align-top transition duration-200 bg-white bg-center bg-no-repeat bg-contain border border-gray-300 rounded-sm appearance-none cursor-pointer form-check-input checked:bg-blue-600 checked:border-blue-600 focus:outline-none"
                      id="mensajeTexArea"
                      defaultChecked={true}
                    />
                    <label className="inline-block text-gray-800 form-check-label" htmlFor="mensajeTexArea">
                      Acepto{" "}
                      <Link className=" text-primary" to="/legal/politicas-proteccion-datos">
                        Políticas de Privacidad
                      </Link>
                    </label>
                  </div>
                  <ButtonPrimary type="submit" className="w-full py-3 mb-6" classSpan="text-base">
                    Solicitar Información
                  </ButtonPrimary>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};
