import { AtSymbolIcon, DeviceMobileIcon, UserIcon } from "@heroicons/react/outline";
import { Link } from "react-router-dom";
import { ButtonPrimary } from "../../../../../../components";
export const FormCursoCard = ({ curso }) => {
  return (
    <form className="flex flex-col">
      <div className="flex items-center px-3 py-2 mb-4 bg-white border-2 rounded-lg form-control focus-within:text-gray-400 focus-within:bg-white focus-within:border-primary">
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
      <div className="flex items-center px-3 py-2 mb-4 bg-white border-2 rounded-lg form-control focus-within:text-gray-400 focus-within:bg-white focus-within:border-primary">
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
      <div className="flex items-center px-3 py-2 mb-4 bg-white border-2 rounded-lg form-control focus-within:text-gray-400 focus-within:bg-white focus-within:border-primary ">
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
      <div className="mb-4 form-group">
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
          spellCheck="false"
          value={`Hola estoy interesad@, en el Curso: ${curso.titulo} gracias.`}
          onChange={() => {}}
        />
      </div>
      <div className="mb-4 text-center form-group form-check">
        <input
          type="checkbox"
          className="w-4 h-4 mt-1 mr-2 align-top transition duration-200 bg-white bg-center bg-no-repeat bg-contain border border-gray-300 rounded-sm appearance-none cursor-pointer form-check-input checked:bg-blue-600 checked:border-blue-600 focus:outline-none"
          defaultChecked={true}
        />
        <p className="inline-block form-check-label">
          Acepto{" "}
          <Link className=" text-primary dark:text-sky-500" to="/legal/politicas-proteccion-datos">
            Políticas de Privacidad
          </Link>
        </p>
      </div>
      <ButtonPrimary type="submit" className="w-full py-3 mb-4" classSpan="text-base">
        Solicitar Información
      </ButtonPrimary>
    </form>
  );
};
