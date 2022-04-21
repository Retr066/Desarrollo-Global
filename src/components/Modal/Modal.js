import { useCallback, useRef } from "react";

import { ModalBody, ModalFooter, ModalHeader } from "./partials";

export const Modal = ({ children, verModal, toggleVerModal, className = "max-w-4xl" }) => {
  const modalFondoElement = useRef();

  const cerrarModal = useCallback(
    (e) => {
      if (e.target === modalFondoElement.current) {
        toggleVerModal();
      }
    },
    [toggleVerModal, modalFondoElement]
  );

  return (
    <>
      <div
        ref={modalFondoElement}
        onClick={cerrarModal}
        className={`${
          verModal ? "translate-y-[0%]" : "delay-200 pointer-events-none -translate-y-[100%]"
        } justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none`}
      >
        <div
          className={`${verModal ? "translate-y-[0%] opacity-1" : "-translate-y-[50%] opacity-0"}
           delay-75 transition ease-linear  duration-200  relative w-auto my-6 mx-auto ${className}`}
        >
          <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white dark:bg-secondary outline-none focus:outline-none">
            <button
              type="button"
              onClick={toggleVerModal}
              className="md:hidden p-1 ml-auto border-0  right-0  absolute text-3xl leading-none font-semibold outline-none focus:outline-none"
            >
              <span className=" h-6 w-6 text-2xl block outline-none focus:outline-none">X</span>
            </button>
            {children}
          </div>
        </div>
      </div>
      {verModal && <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>}
    </>
  );
};

Modal.Header = ModalHeader;
Modal.Body = ModalBody;
Modal.Footer = ModalFooter;
