import { StatusOnlineIcon } from "@heroicons/react/outline";
import { IconAtencionCliente, IconGarantia, IconPersonaCertificado, IconPlataforma } from "../../../../../../assets/svgs";

export const beneficios = [
  {
    id: 1,
    Icon: () => <StatusOnlineIcon className="w-16 h-16 text-danger hidden sm:block" />,
    titulo: "Todas tus Clases en vivo",
    descripcion:
      "Todas las Clases son 100% en vivo desde nuestra plataforma educativa de clases en linea (Chat, audio y video, pantalla compartida).",
  },
  {
    id: 2,
    Icon: () => <IconPlataforma className="w-16 h-16 text-primary dark:text-white hidden sm:block" />,
    titulo: "Acceso a Plataforma Educativa Premium",
    descripcion:
      "Puedes repasar  los videos de cada clase , después de una hora de finalizada la sesión en vivo, acceso de Material, PPT, Demos, evaluaciones y simulacros.",
  },
  {
    id: 3,
    Icon: () => <IconPersonaCertificado className="w-16 h-16 text-primary dark:text-white hidden sm:block" />,
    titulo: "Te entregamos tu Certificado Físico y Digital",
    descripcion:
      "Te otorgamos Certificación, valido para postular a convocatorias del estado, el mismo que se entrega en formato Digital desde tu perfil de alumno y Físicamente a tu domicilio vía olva courier sin ningún costo adicional.",
  },
  {
    id: 4,
    Icon: () => <IconAtencionCliente className="w-16 h-16 text-primary dark:text-white hidden sm:block" />,
    titulo: "Atención Personalizada",
    descripcion:
      "Nos preocupamos en brindarte la mejor experiencia de clases virtuales, la satisfacción de nuestros alumnos es nuestro principal objetivo.",
  },
  {
    id: 5,
    Icon: () => <IconGarantia className="w-16 h-16 text-primary dark:text-white hidden sm:block" />,
    titulo: "Experiencia Comprobada",
    descripcion: "Más de 10 años brindando capacitaciones virtuales.",
  },
];
