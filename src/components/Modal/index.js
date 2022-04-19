import { ModalBody, ModalFooter, ModalHeader } from "./partials";

import { Modal as ModalComponent } from "./Modal";

export const Modal = Object.assign(ModalComponent, {
  Header: ModalHeader,
  Body: ModalBody,
  Footer: ModalFooter,
});

export default Modal;
