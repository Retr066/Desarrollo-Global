import { createContext, useCallback, useMemo, useReducer, useState } from "react";
import { CarritoComprasReducer } from "../reducers";

export const LayoutHomeContext = createContext({});
const INITIAL_STATE_CARRITO_COMPRAS = {
  productos: [],
  total: 0,
  loading: false,
  error: null,
};
const LayoutHomeProvider = ({ children }) => {
  const [verModal, setVerModal] = useState(false);
  const [verMenuCompras, setMenuCompras] = useState(true);
  const [state, dispatch] = useReducer(CarritoComprasReducer, INITIAL_STATE_CARRITO_COMPRAS);

  const contextCarritoCompras = useMemo(() => {
    return { state, dispatch };
  }, [state, dispatch]);

  const toggleVerModal = useCallback(() => {
    setVerModal(!verModal);
  }, [verModal]);

  const toggleMenuCompras = useCallback(() => {
    setMenuCompras(!verMenuCompras);
  }, [verMenuCompras]);

  return (
    <LayoutHomeContext.Provider value={{ verModal, toggleVerModal, verMenuCompras, toggleMenuCompras, contextCarritoCompras }}>
      {children}
    </LayoutHomeContext.Provider>
  );
};

export default LayoutHomeProvider;
