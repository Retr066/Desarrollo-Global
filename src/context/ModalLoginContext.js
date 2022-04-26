import { createContext, useCallback, useState } from "react";

export const ModalLoginContext = createContext({});

const ModalLoginProvider = ({ children }) => {
  const [verModal, setVerModal] = useState(false);
  const toggleVerModal = useCallback(() => {
    setVerModal(!verModal);
  }, [verModal]);

  return <ModalLoginContext.Provider value={{ verModal, toggleVerModal }}>{children}</ModalLoginContext.Provider>;
};

export default ModalLoginProvider;
