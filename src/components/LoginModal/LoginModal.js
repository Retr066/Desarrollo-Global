import { Logo } from "../Logo";
import Modal from "../Modal";
import iconPC from "../../assets/imgs/icon-pc-login.png";
import { Form, Parrafo, RedesSociales } from "./partials";
import { ModalLoginContext } from "../../context";
import { useContext } from "react";
export const LoginModal = () => {
  const { verModal, toggleVerModal } = useContext(ModalLoginContext);
  return (
    <>
      <Modal verModal={verModal} toggleVerModal={toggleVerModal} className="max-w-4xl ">
        <div className="flex md:flex-row flex-col py-8 ">
          <div className=" w-full md:w-1/2 px-10 hidden md:block">
            <Logo className="mb-3 h-24" />
            <h3 className="text-3xl font-extrabold mb-3 ml-7">BIENVENIDOS</h3>
            <img className="w-full h-auto" src={iconPC} alt="pc icono desarrollo global" />
            <Parrafo>Ingresa a tu Aula Virtual y sigue aprendiendo y mejorando tus competencias profesionales.</Parrafo>
          </div>
          <div className="w-full md:w-1/2  px-4">
            <h3 className="text-center text-3xl font-bold mb-3">Aula Virtual</h3>
            <Parrafo>Ingresa tu email y contraseña para que puedas ingresar al aula virtual.</Parrafo>
            <Form />
            <RedesSociales />
          </div>
        </div>
      </Modal>
    </>
  );
};
