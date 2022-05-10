import { Container } from "../../../Container/Container";
import { CursosList } from "./components";
export const Cursos = () => {
  return (
    <Container>
      <div className="pt-7 inline font-bold text-24 sm:text-32 leading-32 font-gil">Cursos</div>
      <CursosList />
    </Container>
  );
};
