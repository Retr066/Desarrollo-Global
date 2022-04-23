import React from "react";

export const DerechosReservados = ({ year }) => {
  return (
    <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
      © 2011 - {year}{" "}
      <a href="https://flowbite.com" className="hover:underline">
        Desarrollo Global
      </a>
      . Todos los Derechos Reservados.
    </span>
  );
};
