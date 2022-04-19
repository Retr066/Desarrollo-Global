import { useState } from "react";

export const Buscador = ({ className = "", width }) => {
  const [escribiendo, setEscribiendo] = useState(false);

  const manejarBusqueda = ({ target }) => {
    if (target.value !== "") {
      setEscribiendo(true);
    } else {
      setEscribiendo(false);
    }
  };

  return (
    <div className={`flex items-center ${className}`}>
      <input
        onChange={manejarBusqueda}
        name="search"
        type="search"
        className={` ${
          escribiendo ? (width ? `${width} rounded-r-lg` : "rounded-r-lg w-[240px]") : width ? width : "w-[200px]"
        } h-10 pl-4 pr-2 py-1  bg-gray-100 rounded-l-lg placeholder:text-xs text-dark  focus:outline-none`}
        placeholder="¿Qué buscaremos hoy?"
        autoComplete="off"
        maxLength={255}
      />

      {!escribiendo && (
        <div>
          <span className="flex items-center bg-primary justify-center w-10 h-10 text-white rounded-r-lg">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </span>
        </div>
      )}
    </div>
  );
};
