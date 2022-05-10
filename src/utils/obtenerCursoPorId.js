import { cursos } from "../pages/DesarrolloGlobalPages/Cursos/data";

export const obtenerCursoPorId = (id) => {
  return cursos.find((curso) => curso.id === id);
};
