import { AcademicCapIcon, BookmarkAltIcon, HomeIcon, StatusOnlineIcon } from "@heroicons/react/outline";

export const linksButtonSpan = [
  {
    href: "/cursos",
    nombre: "Cursos",
    Icon: () => <BookmarkAltIcon className="w-7 h-7" />,
  },
  {
    href: "/diplomas",
    nombre: "Diplomas",
    Icon: () => <AcademicCapIcon className="w-7 h-7" />,
  },
  {
    href: "/diplomados",
    nombre: "Diplomados",
    Icon: () => <AcademicCapIcon className="w-7 h-7" />,
  },
  {
    href: "/inhouse",
    nombre: "In-House",
    Icon: () => <HomeIcon className="w-7 h-7" />,
  },
  {
    href: "/seminarios",
    nombre: "Seminarios",
    Icon: () => <StatusOnlineIcon className="w-7 h-7" />,
  },
];
