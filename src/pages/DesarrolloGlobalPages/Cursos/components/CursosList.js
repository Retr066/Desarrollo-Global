import { cursos } from "../data";
import { CursoCard } from "./CursoCard";

export const CursosList = () => {
  return (
    <div className="container">
      <div className="flex flex-wrap -mx-4">
        {cursos.map((curso) => (
          <CursoCard key={curso.id} {...curso} />
        ))}
      </div>
    </div>
  );
};
