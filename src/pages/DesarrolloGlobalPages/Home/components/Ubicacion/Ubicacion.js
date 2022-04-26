import { Container } from "../../../../../Container";
import chicaMapa from "../../../../../assets/imgs/chica-mapa.png";
import { ButtonPrimary } from "../../../../../components";
import { IconWhatsApp } from "../../../../../assets/svgs";
import { Link } from "react-router-dom";

export const Ubicacion = () => {
  return (
    <Container className="xl:max-w-[85%]">
      <h1 className="text-4xl font-extrabold mb-7 leading-loose text-center">
        Donde <span className="text-primary dark:text-sky-500">nos encuentras</span>
      </h1>
      <div className="flex flex-col md:flex-row gap-6 md:gap-0">
        <div className="w-full md:w-1/2 flex">
          <img className="hidden sm:flex md:hidden lg:flex h-full max-w-[300px] w-full" src={chicaMapa} alt="Chica mapa" />
          <div className="flex flex-col mx-4 justify-center gap-4 h-[300px] sm:h-auto">
            <h3 className="font-bold text-xl">Si ya eres Alumno</h3>
            <p>Estamos disponibles aquí</p>

            <ButtonPrimary classSpan="flex justify-center items-center gap-4">
              <IconWhatsApp /> WhatsApp
            </ButtonPrimary>
            <p>Consulta con atención al alumno el estado de tus notas y envio de certificados.</p>
            <p>
              (*) Al hacer clic aceptas nuestra política de{" "}
              <Link className="text-primary underline" to="/legal/terminos-servicio">
                tratamiento de datos personales.
              </Link>
            </p>
          </div>
        </div>
        <div className="w-full md:w-1/2">
          <iframe
            title="Ubicacion de Desarrollo Global"
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7802.742397245471!2d-77.040781!3d-12.086721!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x2a0f952f9f466080!2sCentro%20de%20Capacitaci%C3%B3n%20y%20Desarrollo%20Global!5e0!3m2!1ses-419!2spe!4v1650917378705!5m2!1ses-419!2spe"
            width="100%"
            height="450"
            style={{ border: "0" }}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            id="mapaDG"
          />
        </div>
      </div>
    </Container>
  );
};
