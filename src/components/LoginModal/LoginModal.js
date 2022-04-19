import { Logo } from "../Logo";
import Modal from "../Modal";
import iconPC from "../../assets/imgs/icon-pc-login.png";
import { ButtonPrimary } from "../buttons";
import { Link } from "react-router-dom";
export const LoginModal = ({ verModal, toggleVerModal }) => {
  return (
    <>
      <Modal verModal={verModal} toggleVerModal={toggleVerModal}>
        <div className="flex md:flex-row flex-col py-8 ">
          <div className=" w-full md:w-1/2  px-10">
            <Logo className="mb-3 " />
            <h3 className="text-3xl font-extrabold mb-3 ml-7">BIENVENIDOS</h3>
            <img className="w-full h-auto" src={iconPC} alt="pc icono desarrollo global" />
            <p className="text-center font-semibold mb-3">
              Ingresa a tu Aula Virtual y sigue aprendiendo y mejorando tus competencias profesionales.
            </p>
          </div>
          <div className="w-full md:w-1/2  px-4">
            <h3 className="text-center text-3xl font-bold mb-3">Aula Virtual</h3>
            <p className="text-center font-semibold mb-3">Ingresa tu email y contraseña para que puedas ingresar al aula virtual.</p>
            <form className="mb-3">
              <div className="mb-6">
                <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                  Correo electrónico
                </label>
                <input
                  type="email"
                  id="email"
                  className="shadow-sm bg-gray-50 border outline-none border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary focus:border-primary block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                  placeholder="desarrollo@global.com"
                  autoComplete="off"
                  required
                />
              </div>
              <div className="mb-6">
                <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                  Contraseña
                </label>
                <input
                  type="password"
                  id="password"
                  className="shadow-sm bg-gray-50 border outline-none  border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary focus:border-primary block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                  required
                />
              </div>
              <div className="flex items-center justify-center  mb-6">
                {/* <div className="flex items-start ">
                  <div className="flex items-center h-5">
                    <input
                      id="terms"
                      aria-describedby="terms"
                      type="checkbox"
                      className="w-4 h-4 bg-gray-50 rounded border border-gray-300 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800"
                      required
                    />
                  </div>
                  <div className="ml-3 text-sm">
                    <label htmlFor="terms" className="font-medium text-gray-900 dark:text-gray-300">
                      Recordar
                    </label>
                  </div>
                </div> */}
                <div className="ml-3 text-sm">
                  <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                    * Al iniciar sesión acepta{" "}
                    <Link
                      target="_blank"
                      rel="noopener noreferrer"
                      to="/legal/politicas-proteccion-datos"
                      className="text-primary hover:underline dark:text-blue-500"
                    >
                      POLÍTICA DE PROTECCIÓN DE DATOS PERSONALES
                    </Link>
                    .
                  </p>
                </div>
              </div>
              <ButtonPrimary type="submit" className="w-full mb-3">
                {" "}
                Ingresar Aula Virtual
              </ButtonPrimary>
              <div className="flex justify-center">
                <Link to="/auth/recuperacion">
                  <span className="text-primary dark:text-blue-500">¿Olvidaste tu contraseña?</span>
                </Link>
              </div>
            </form>
            <div className="my-3 grid grid-cols-2 gap-7">
              <button className="group h-12 px-6 border-2 border-gray-300 rounded-full transition duration-300 hover:border-blue-400 focus:bg-blue-50 active:bg-blue-100">
                <div className="relative flex items-center space-x-4 justify-center">
                  <img
                    src="https://tailus.io/sources/blocks/social/preview/images/google.svg"
                    className="absolute left-0 w-5"
                    alt="google logo"
                  />
                  <span className="block w-max font-semibold tracking-wide  text-sm transition duration-300 group-hover:text-blue-600 sm:text-base">
                    Google
                  </span>
                </div>
              </button>
              <button className="group h-12 px-6 border-2 border-gray-300 rounded-full transition duration-300 hover:border-blue-400 focus:bg-blue-50 active:bg-blue-100">
                <div className="relative flex items-center space-x-4 justify-center">
                  <img
                    src="https://upload.wikimedia.org/wikipedia/en/0/04/Facebook_f_logo_%282021%29.svg"
                    className="absolute left-0 w-5"
                    alt="Facebook logo"
                  />
                  <span className="block w-max font-semibold tracking-wide text-sm transition duration-300 group-hover:text-blue-600 sm:text-base">
                    Facebook
                  </span>
                </div>
              </button>
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
};
