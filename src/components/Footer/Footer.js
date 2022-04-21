import { contactosLinks, legalLinks } from "./data";
import { Logo } from "../Logo";
import { RedesSocialesLinks, LinkList } from "./partials";
import certificadoIso from "../../assets/imgs/certificado-iso.png";
export const Footer = () => {
  const currentTime = new Date();
  const year = currentTime.getFullYear();

  return (
    <footer className="p-4  sm:p-6  sm:px-16">
      <div className="lg:flex lg:justify-between">
        <div className="mb-6 md:mb-0 flex flex-col sm:flex-row gap-8 lg:block items-center  lg:mr-4  ">
          <div className="flex flex-col justify-center items-center ">
            <Logo tipo="link" style={{ minWidth: "auto", height: "100%" }} className="max-w-[340px] w-full" />
            <p className="text-center font-semibold">Capacitación para Funcionarios y Servidores Públicos</p>
          </div>
          <div className="flex flex-col justify-center items-center ">
            <img
              style={{ minWidth: "auto" }}
              className="h-full max-w-[240px] w-full"
              src={certificadoIso}
              alt="Certificado Iso 9001:2015"
            />
            <p>
              ISO 9001:2015 <span className="font-bold">COD N°. CO18.00048/U</span>
            </p>
          </div>
        </div>
        <div className="grid justify-items-start content-center grid-cols-1 xs:grid-cols-2 sm:grid-cols-3  gap-8 sm:gap-6 mt-8 lg:m-0 ">
          <div>
            <h2 className="mb-6 text-sm font-bold text-gray-900 uppercase dark:text-white">Contacta a DesarrolloGlobal</h2>
            <LinkList links={contactosLinks} />
          </div>
          <div>
            <h2 className="mb-6 text-sm font-bold text-gray-900 uppercase dark:text-white ">Dónde Estamos</h2>
            <div className="text-gray-600 dark:text-gray-400">
              <p className="font-bold">Oficina Administrativa</p>
              <p>Av. Julio C. Tello 741 Lince (01) 5556005</p>
            </div>
          </div>
          <div>
            <h2 className="mb-6 text-sm font-bold text-gray-900 uppercase dark:text-white">Enlaces de ayuda</h2>
            <LinkList links={legalLinks} />
          </div>
        </div>
      </div>
      <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
      <div className="sm:flex sm:items-center sm:justify-between">
        <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
          © 2011 - {year}{" "}
          <a href="https://flowbite.com" className="hover:underline">
            Desarrollo Global
          </a>
          . Todos los Derechos Reservados.
        </span>
        <RedesSocialesLinks />
      </div>
    </footer>
  );
};
