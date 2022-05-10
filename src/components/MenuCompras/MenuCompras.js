import { useCallback, useContext, useRef } from "react";
import { LayoutHomeContext } from "../../context";
import { ShoppingBagIcon, XIcon, TrashIcon } from "@heroicons/react/outline";

import { ListItems } from "./partials";
import { typesActionReducers } from "../../types";
export const MenuCompras = () => {
  const { verMenuCompras, toggleMenuCompras, contextCarritoCompras } = useContext(LayoutHomeContext);
  //useContext LayoutHomeContext
  const { state, dispatch } = contextCarritoCompras;

  const menuComprasElement = useRef(null);
  const switchBackground = useCallback(
    (e) => {
      if (menuComprasElement.current === e.target) {
        toggleMenuCompras();
      }
    },
    [toggleMenuCompras]
  );

  const limpiarCarrito = () => {
    dispatch({
      type: typesActionReducers.LIMPIAR_CARRITO,
    });
  };

  return (
    <>
      {!verMenuCompras && (
        <div
          onClick={switchBackground}
          ref={menuComprasElement}
          className="bg-[rgba(0,0,0,.35)] inset-0 w-full h-screen fixed right-0 z-[100]"
        ></div>
      )}

      <aside
        className={`${
          verMenuCompras ? "translate-x-[100%]" : "translate-x-[0%]"
        } transition ease-out inset-y-0 right-0  duration-300 fixed w-full sm:max-w-[380px]  h-screen bg-white dark:bg-secondary z-[101]`}
        aria-label="menu-compras"
      >
        <div className="flex flex-col h-full bg-gray-100 rounded dark:bg-secondary-dark ">
          <div className="flex px-3 py-4  items-center bg-white dark:bg-secondary justify-between pl-2.5 mb-5 border-b ">
            <div className="flex items-center p-2 text-base font-normal rounded-lg text-primary dark:text-white ">
              <ShoppingBagIcon className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" />
              <span className="flex-1 ml-3 text-xl font-bold whitespace-nowrap ">Tu Carrito de Compras</span>
            </div>
            <button className="bg-gray-500 rounded-full p-[2px]" onClick={toggleMenuCompras}>
              <XIcon className="w-5 h-5 text-white" />
            </button>
          </div>
          <ListItems {...state} dispatch={dispatch} />
          {state.productos.length > 0 && (
            <div className="mt-5 bg-white dark:bg-secondary p-7">
              <div onClick={limpiarCarrito} className="flex items-center justify-center gap-3 cursor-pointer ">
                <TrashIcon className="w-6 h-6" />
                <span>Vaciar el carrito de Compras</span>
              </div>
            </div>
          )}
        </div>
      </aside>
    </>
  );
};
