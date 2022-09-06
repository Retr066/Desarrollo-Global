import { BookmarkAltIcon, CalendarIcon, MenuAlt2Icon, StatusOnlineIcon, UserGroupIcon } from "@heroicons/react/outline";
import { StarIcon } from "@heroicons/react/solid";
import { IconCertificado, IconSesiones } from "../../../../../assets/svgs";
import moment from "moment";
import { Container } from "../../../../../Container";
const agregarCerosAnumerosMenoresA10 = (numero) => (numero < 10 ? `0${numero}` : numero);

const estrellas = [1, 2, 3, 4, 5];

export const CabezeraCurso = ({ curso }) => {
  return (
    <Container
      style={{
        maxWidth: "1152px",
      }}
      className="flex items-center justify-center py-5 lg:justify-start "
      classNameContent="bg-white dark:bg-secondary"
    >
      <div className="w-full max-w-[744px]">
        <div className="flex items-end mb-2 ">
          <BookmarkAltIcon className="w-6 h-6" />
          <div className="flex flex-col ml-1 font-semibold xs:flex-row sm:flex-row">
            <p className="mr-1">Curso de Alta </p>
            <p>Especialización</p>
          </div>
          <span className="flex items-center gap-1 px-2 py-1 ml-2 text-xs text-white rounded-lg bg-danger">
            <StatusOnlineIcon className="w-6 h-6" />
            <p className="">EN VIVO</p>
          </span>
        </div>
        <div className="flex flex-col mb-7">
          <h1 className="text-3xl font-extrabold uppercase sm:text-4xl ">{curso.titulo}</h1>
          <div className="flex flex-col xs:flex-row sm:flex-row xs:gap-3 sm:gap-3">
            <div className="flex items-end justify-center">
              <ul className="flex">
                {estrellas.map((estrella, index) => (
                  <li key={index} className="text-yellow-500">
                    <StarIcon className="w-5 h-5" />
                  </li>
                ))}
              </ul>
              <p className="ml-2 text-sm font-medium">4.90 (180)</p>
            </div>
            <div className="flex items-end justify-center">
              <UserGroupIcon className="w-6 h-6 " />
              <p className="ml-2 text-sm font-medium">210 Alumnos que finalizaron el curso</p>
            </div>
          </div>
        </div>

        <div className="flex items-start justify-start mb-7">
          <MenuAlt2Icon className="w-5 h-5 mt-1 mr-3 min-w-min" />
          <p className="font-semibold tracking-normal text-body-color text-normal">{curso.descripcion}</p>
        </div>
        <div className="flex flex-row justify-between mb-7">
          <div className="flex flex-col items-center sm:flex-row sm:mr-10">
            <img
              className="inline-block w-20 h-20 m-2 rounded-full ring-2 ring-white"
              src="https://www.desarrolloglobal.pe/public/files/PROFESORA-LORENA.png"
              alt="Profesora Lórena"
            />
            <div className="flex flex-col ">
              <p className="font-bold text-normal">Docente - Lorena Ruiz</p>
              <p className="text-sm leading-none text-gray-600 dark:text-gray-300">
                Contador Público Colegiado, estudios en Maestría en Auditoria de Gestión y Control Gubernamental por la Universidad Nacional
                Mayor de San Marcos; ex funcionario del Ministerio de Economía y Finanzas con 10 años de experiencia en instituciones del
                Sector Público en el manejo del Sistema Integrado de Administración Financiera SIAF - RP.
              </p>
            </div>
          </div>
        </div>
        <div className="grid items-stretch content-center grid-cols-2 gap-3 py-3 rounded-lg sm:grid-cols-4 grid-auto justify-items-center bg-slate-100 ">
          <div className="flex items-center justify-start">
            <CalendarIcon className="w-9 h-9 text-primary" strokeWidth={1} />
            <div className="flex flex-col ml-2">
              <p className="text-base font-bold leading-none text-dark">{moment(curso.fechaInicio).format("D [de] MMMM")}</p>
              <span className="text-sm leading-none text-gray-600">Inicio de Clases</span>
            </div>
          </div>
          <div className="flex items-center justify-start">
            <StatusOnlineIcon className="w-9 h-9 text-danger" strokeWidth={1} />
            <div className="flex flex-col ml-2 ">
              <p className="text-base font-bold leading-none text-dark">Modalidad</p>
              <span className="text-sm leading-none text-gray-600">En Vivo</span>
            </div>
          </div>
          <div className="flex items-center justify-start">
            <IconSesiones className="w-9 h-9 text-primary" />
            <div className="flex flex-col ml-2">
              <p className="text-base font-bold leading-none text-dark">{agregarCerosAnumerosMenoresA10(curso.sesiones.length)}</p>
              <span className="text-sm leading-none text-gray-600">Sesiones</span>
            </div>
          </div>
          <div className="flex items-center justify-start ">
            <IconCertificado className="w-9 h-9 text-primary" />
            <div className="flex flex-col ml-2">
              <p className="text-base font-bold leading-none text-dark">Certificación</p>
              <span className="text-sm leading-none text-gray-600">Universitaria {curso.horasCertificado} horas</span>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};
