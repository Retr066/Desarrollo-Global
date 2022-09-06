import { AcademicCapIcon, BookmarkAltIcon, GlobeAltIcon, HomeIcon, StatusOnlineIcon } from "@heroicons/react/outline";

export const links = [
  {
    to: "/cursos",
    nombre: "Cursos",
    href: false,
    Icon: ({ className }) => <BookmarkAltIcon className={`${className}`} />,
  },
  {
    to: "/diplomas",
    nombre: "Diplomas",
    href: false,
    Icon: ({ className }) => <AcademicCapIcon className={`${className}`} />,
  },
  {
    to: "/diplomados",
    nombre: "Diplomados",
    href: false,
    Icon: ({ className }) => <AcademicCapIcon className={`${className}`} />,
  },
  {
    to: "/inhouse",
    nombre: "InHouse",
    href: false,
    Icon: ({ className }) => <HomeIcon className={`${className}`} />,
  },
  {
    to: "https://www.desarrolloglobal.pe/blog",
    nombre: "Blog",
    href: true,
    Icon: ({ className }) => <GlobeAltIcon className={`${className}`} />,
  },
  {
    to: "/seminarios",
    nombre: "Seminarios",
    href: false,
    Icon: ({ className }) => <StatusOnlineIcon className={`${className}`} />,
  },
  {
    to: "/live",
    nombre: "En vivo",
    href: false,
    Icon: ({ className }) => <StatusOnlineIcon className={`${className}`} />,
  },

];
