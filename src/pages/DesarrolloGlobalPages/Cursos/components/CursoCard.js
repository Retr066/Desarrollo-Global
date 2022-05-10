import moment from "moment";
import { Link } from "react-router-dom";
import { ShoppingCartIcon, CalendarIcon, StatusOnlineIcon, StatusOfflineIcon, CheckIcon } from "@heroicons/react/outline";
import { IconCertificado } from "../../../../assets/svgs/IconsSocialMedia";
import { SpanEspecializacion, SpanEstado } from "../styles-components";
import { typesActionReducers } from "../../../../types";
import { LayoutHomeContext } from "../../../../context";
import { useContext } from "react";
import { comprobarProductoEnCarrito } from "../../../../utils";

export const CursoCard = ({
  id,
  titulo,
  especializacion,
  image,
  slug,
  certificacion,
  horasCertificado,
  estado,
  fechaInicio,
  precioConDescuento,
  precioSinDescuento,
  descuento,
}) => {
  const { contextCarritoCompras } = useContext(LayoutHomeContext);
  const { state, dispatch } = contextCarritoCompras;
  const { productos } = state;
  const agregarAlCarrito = () => {
    dispatch({
      type: typesActionReducers.AGREGAR_AL_CARRITO,
      payload: {
        id,
        image,
        titulo,
        precioConDescuento,
        precioSinDescuento,
      },
    });
  };
  const estaEnCarrito = comprobarProductoEnCarrito(id, productos);

  const removerDelCarrito = () => {
    dispatch({
      type: typesActionReducers.REMOVER_DEL_CARRITO,
      payload: {
        id,
        precioConDescuento,
      },
    });
  };

  return (
    <div className="w-full px-4 md:w-1/2 xl:w-1/3">
      <div className="relative mb-10 overflow-hidden bg-gray-100 rounded-lg dark:bg-secondary-dark">
        <Link
          to={`/cursos/${slug}`}
          className="font-bold text-dark dark:text-white text-xl sm:text-[22px] md:text-xl lg:text-[22px] xl:text-xl 2xl:text-[22px]
                 block hover:text-primary"
        >
          <SpanEspecializacion>{especializacion}</SpanEspecializacion>
          <SpanEstado estado={estado === "EN VIVO" ? estado : ""}>
            {estado === "EN VIVO" ? (
              <StatusOnlineIcon
                className="inline-block w-6 h-6 mr-2 text-white"
                strokeWidth="2"
                fill="currentColor"
                stroke="currentColor"
              />
            ) : (
              <StatusOfflineIcon
                className="inline-block w-6 h-6 mr-2 text-white"
                strokeWidth="2"
                fill="currentColor"
                stroke="currentColor"
              />
            )}
            {estado}
          </SpanEstado>

          <img src={image} alt={titulo} className="w-full" />
        </Link>
        <div className="flex flex-col p-8 sm:p-9 md:p-7 xl:p-9 ">
          <h3 className="mb-5 text-xl font-bold">{titulo}</h3>
          <div className="flex flex-col gap-2 mb-5">
            <div className="flex items-end">
              <CalendarIcon className="w-6 h-6" strokeWidth={1.5} /> <p className="ml-2 font-bold">Inicio:</p>
              <span className="ml-2 font-normal">{moment(fechaInicio).format("D [de] MMMM")}</span>
            </div>
            <div className="flex ">
              <IconCertificado className="w-6 h-6" />
              <span className="ml-2 font-bold text-body-color">{certificacion}:</span>
              <span className="ml-2 text-body-color">{horasCertificado} horas</span>
            </div>
          </div>

          <div className="flex items-center justify-between mb-5 tracking-wide">
            <div className="flex">
              <span className="text-xl font-extrabold text-danger">S/{precioConDescuento.toFixed(2)}</span>
              <p className="ml-3 text-gray-500 line-through">S/{precioSinDescuento.toFixed(2)}</p>
            </div>
            <div className="flex p-2 ml-3 rounded-sm bg-danger">
              <span className="text-lg font-extrabold text-white">-{descuento}%</span>
            </div>
          </div>

          <div className="flex gap-2 transition-colors duration-200">
            {estaEnCarrito ? (
              <button
                onClick={removerDelCarrito}
                className="p-2 pl-5 pr-5 text-lg transition-colors duration-200 bg-transparent border-2 rounded-lg  border-primary text-primary hover:bg-primary hover:text-gray-100 focus:border-4 focus:border-primary-light dark:text-white dark:border-white dark:bg-primary dark:hover:bg-primary-light dark:hover:text-gray-100"
              >
                <CheckIcon className="w-6 h-6" />
              </button>
            ) : (
              <button
                onClick={agregarAlCarrito}
                className="p-2 pl-5 pr-5 text-lg transition-colors duration-200 bg-transparent border-2 rounded-lg  border-primary text-primary hover:bg-primary hover:text-gray-100 focus:border-4 focus:border-primary-light dark:text-white dark:border-white dark:bg-primary dark:hover:bg-primary-light dark:hover:text-gray-100"
              >
                <ShoppingCartIcon className="w-6 h-6" />
              </button>
            )}

            <Link
              to={`/cursos/${slug}`}
              className="flex-1 px-4 py-2 text-base font-medium text-center text-white transition-colors duration-200 border rounded-lg bg-primary text-body-color hover:bg-primary-light focus:outline-none focus:bg-primary-light focus:ring-2"
            >
              Mas Información
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
