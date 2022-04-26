import { Container } from "../../../../../Container";

import { SeminariosSlides } from "./components";

export const SeminariosCarrusel = () => {
  return (
    <Container>
      <h1 className="text-3xl font-extrabold  leading-loose text-center">
        Explora nuestros <span className="text-primary dark:text-dark">Seminarios</span> Gratuitos
      </h1>
      <SeminariosSlides />
    </Container>
  );
};
