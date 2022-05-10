import { cursos } from "../pages/DesarrolloGlobalPages/Cursos/data";

export const obtenerCursoPorSlug = (slug = "") => cursos.find((curso) => curso.slug === slug);
