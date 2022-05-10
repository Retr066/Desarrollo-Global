import { typesActionReducers } from "../types";

export const INITIAL_STATE = {
  productos: [],
  total: 0,
  loading: false,
  error: null,
};
//saber cuando el producto ya esta agregado en el carrito

export const CarritoComprasReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case typesActionReducers.AGREGAR_AL_CARRITO:
      const producto = action.payload;
      const productos = [...state.productos];
      const existeProducto = productos.find((productoExistente) => productoExistente.id === producto.id);
      if (existeProducto) {
        return {
          ...state,
          productos: productos,
          total: state.total + producto.precioConDescuento,
        };
      } else {
        return {
          ...state,
          productos: [...state.productos, producto],
          total: state.total + producto.precioConDescuento,
        };
      }
    case typesActionReducers.REMOVER_DEL_CARRITO:
      return {
        ...state,
        productos: state.productos.filter((producto) => producto.id !== action.payload.id),
        total: state.total - action.payload.precioConDescuento,
      };
    case typesActionReducers.LIMPIAR_CARRITO:
      return {
        ...state,
        productos: [],
        total: 0,
      };

    default:
      return state;
  }
};
