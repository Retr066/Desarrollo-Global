import { TrashIcon } from "@heroicons/react/outline";
import { typesActionReducers } from "../../../types";

export const Item = ({ id, titulo, precioConDescuento, precioSinDescuento, image, dispatch }) => {
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
    <div className="flex  items-center py-4 px-3 border-b">
      <picture className="w-40 object-cover">
        <img src={image} alt={titulo} />
      </picture>
      <div className="flex flex-col px-3 w-full">
        <h2 className="text-sm font-bold">
          <span className="text-primary">Curso</span>
        </h2>
        <h3 className="text-sm">{titulo}</h3>
        <div className="flex ">
          <span className="text-danger text-sm font-extrabold">S/{precioConDescuento.toFixed(2)}</span>
          <p className="ml-3 line-through text-xs text-gray-500">S/{precioSinDescuento.toFixed(2)}</p>
        </div>
      </div>
      <TrashIcon onClick={removerDelCarrito} className="w-8 h-8 flex cursor-pointer" strokeWidth={1} />
    </div>
  );
};
