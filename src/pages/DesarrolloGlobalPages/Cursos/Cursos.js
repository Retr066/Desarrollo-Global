import { Container } from "../../../Container/Container";
import { CursosList } from "./components";
export const Cursos = () => {
  return (
    <Container>
      <div className="inline font-bold pt-7 text-24 sm:text-32 leading-32 font-gil">Cursos Nuevos</div>
      <CursosList />
    </Container>
  );
};
