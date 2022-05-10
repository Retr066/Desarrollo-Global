import { ShoppingCartIcon } from "@heroicons/react/outline";
import { useContext } from "react";
import { LayoutHomeContext } from "../../../../context";

export const CarritoDeComprasV2 = ({ toggleMenuCompras }) => {
  const { contextCarritoCompras } = useContext(LayoutHomeContext);
  const { state } = contextCarritoCompras;

  return (
    <button onClick={toggleMenuCompras} type="button" className="px-3  bg-primary rounded-lg">
      <div className="flex items-center justify-between relative w-10 h-10">
        <ShoppingCartIcon className="h-6 w-6 text-white" strokeWidth="2" />
        <b className="text-normal text-white">{state.productos.length}</b>
      </div>
    </button>
  );
};

export const CarritoDeCompras = ({ toggleMenuCompras }) => {
  return (
    <button onClick={toggleMenuCompras} type="button" className="ml-2 sm:ml-2">
      <div className="flex items-center relative w-10 h-10">
        <ShoppingCartIcon className="h-6 w-6" />
        <div className="absolute flex items-center justify-center top-[-5px] right-1 h-5 w-5 my-1 border-2 border-white rounded-full bg-danger z-2">
          <b className="text-xs text-white">1</b>
        </div>
      </div>
    </button>
  );
};
