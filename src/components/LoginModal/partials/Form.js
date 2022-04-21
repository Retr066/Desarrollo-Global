import React from "react";
import { Link } from "react-router-dom";
import { ButtonPrimary } from "../../buttons";

export const Form = () => {
  return (
    <form className="mb-3">
      <div className="mb-6">
        <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
          Correo electrónico
        </label>
        <input
          type="email"
          id="email"
          className="shadow-sm bg-gray-50 border outline-none border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary focus:border-primary block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
          placeholder="DesarrolloGlobal@gmail.com"
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
          placeholder="********"
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
  );
};
