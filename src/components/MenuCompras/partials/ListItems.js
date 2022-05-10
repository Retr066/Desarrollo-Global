import { ShoppingCartIcon } from "@heroicons/react/outline";
import { ButtonPrimary } from "../../buttons";
import { Item } from "./Item";

export const ListItems = ({ productos, total, dispatch }) => {
  return (
    <div className="flex flex-col gap-3 bg-white dark:bg-secondary">
      {productos.map((producto) => (
        <Item key={producto.id} {...producto} dispatch={dispatch} />
      ))}
      {productos.length > 0 ? (
        <div className="px-5 pt-2 pb-4 border-b ">
          <ButtonPrimary className="w-full py-4">
            <div className="flex items-center justify-between">
              <p className="text-base font-semibold ">Ir a pagar</p>
              <p className="text-base font-medium">
                SubTotal: <span className="ml-1 font-semibold">S/{total.toFixed(2)}</span>
              </p>
            </div>
          </ButtonPrimary>
        </div>
      ) : (
        <div className="flex flex-col items-center gap-3 px-5 pt-5 pb-4 border-b">
          <ShoppingCartIcon className="w-12 h-12" />
          <p className="text-base font-medium text-center">Tu carrito está vacío</p>
          <p className="text-sm font-medium text-center">
            Explora el catálogo y encuentra los mejores cursos para aprender nuevas habilidades
          </p>
        </div>
      )}
    </div>
  );
};
