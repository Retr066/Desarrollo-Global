import { IconCertificado, IconGarantia, IconIso9001 } from "../../../../assets/svgs";

export const queOfrecemos = [
  {
    Icon: () => (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-20 w-20 text-danger"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M5.636 18.364a9 9 0 010-12.728m12.728 0a9 9 0 010 12.728m-9.9-2.829a5 5 0 010-7.07m7.072 0a5 5 0 010 7.07M13 12a1 1 0 11-2 0 1 1 0 012 0z"
        />
      </svg>
    ),
    titulo: "Clases 100% en vivo",
    subTitulo: "Todas las clases en vivo con acceso a grabaciones y plataforma virtual.",
  },
  {
    Icon: () => <IconGarantia className="w-20 h-20 text-primary dark:text-white" />,
    titulo: "Experiencia Garantizada",
    subTitulo: "Más de 9 años brindando programas de capacitación virtuales.",
  },
  {
    Icon: () => <IconCertificado className="w-20 h-20 text-primary dark:text-white" />,
    titulo: "Certificación Válida",
    subTitulo: "Potencia tu CV y recibe Certificación Universitaria de la Fundación UNFSC.",
  },
  {
    Icon: () => <IconIso9001 className="w-20 h-20 text-primary dark:text-white" />,
    titulo: "Calidad Garantizada",
    subTitulo: "Tenemos un sistema de Gestión de Calidad ISO 9001:2015 certificado por BUREAU VERITAS.",
  },
];
