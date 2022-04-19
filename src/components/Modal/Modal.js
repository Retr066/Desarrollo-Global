import { useCallback, useRef } from "react";
import { ModalBody, ModalFooter, ModalHeader } from "./partials";

export const Modal = ({ children, verModal, toggleVerModal, width = "max-w-4xl" }) => {
  const modalFondoElement = useRef();
  const cerrarModal = useCallback(
    (e) => {
      if (e.target === modalFondoElement.current) {
        toggleVerModal();
      }
    },
    [toggleVerModal]
  );
  return (
    <>
      {verModal && (
        <>
          <div
            ref={modalFondoElement}
            onClick={cerrarModal}
            className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
          >
            <div className={`relative w-auto my-6 mx-auto ${width}`}>
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white dark:bg-secondary outline-none focus:outline-none">
                {children}
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      )}
    </>
  );
};

Modal.Header = ModalHeader;
Modal.Body = ModalBody;
Modal.Footer = ModalFooter;
