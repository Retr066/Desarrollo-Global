import { Container } from "../../../../../Container";
import CertificadoCurso from "../../../../../assets/imgs/certificado-curso.png";
import { CheckCircleIcon } from "@heroicons/react/solid";
import { Link } from "react-router-dom";
export const Certificacion = ({ titulo }) => {
  return (
    <Container
      style={{
        maxWidth: "1152px",
      }}
      className="flex items-center justify-center lg:justify-start py-7 "
      classNameContent="bg-slate-200 dark:bg-secondary-dark"
    >
      <div className="w-full  max-w-[744px]  ">
        <h3 className="text-xl font-extrabold">Certificación</h3>
        <p className="mb-7">Válido para postular a convocatorias</p>
        <div className="flex flex-col sm:flex-row">
          <div className="flex flex-col w-full sm:w-3/5">
            <img src={CertificadoCurso} alt="certificado-curso" />
          </div>
          <div className="flex flex-col w-full py-10 sm:w-2/5 sm:pl-2">
            <p className="text-lg font-extrabold mb-7">
              Los participantes que completen exitosamente el programa, recibirán la siguiente certificación:
            </p>
            <p className="mb-2 font-bold">01 CERTIFICADO</p>
            <div className="flex gap-2">
              <CheckCircleIcon className="w-5 h-5 text-primary" />{" "}
              <p className="flex flex-col">
                <span> {titulo}</span> <small>(*) Sujeto a la aprobación del examen correspondiente.</small>
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col text-base">
          <p className="mb-2">
            Nuestro certificado cuenta con código QR y podrás descargar de la página web en{" "}
            <Link className="text-primary hover:underline" to="/certificados">
              /certificados
            </Link>{" "}
            con tu número de DNI y compartir como logro en tu perfil profesional en LinkedIn. También puedes solicitar en físico.
          </p>
          <ul className="pl-5 list-disc marker:text-primary ">
            <li>Válido para las convocatorias públicas y privadas, concursos internos de ascenso en las entidades del Estado.</li>
            <li>Certificación digital, si desea en físico tiene un costo adicional.</li>
          </ul>
        </div>
      </div>
    </Container>
  );
};
