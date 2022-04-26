import { Container } from "../../../../../Container";
import { DescripcionList } from "./components";

export const QueOfrecemos = () => {
  return (
    <Container>
      <h1 className="text-4xl font-extrabold mb-7 leading-loose">
        ¿Que Ofrece <span className="text-primary dark:text-dark">Desarrollo Global </span>?
      </h1>
      <DescripcionList />
    </Container>
  );
};
