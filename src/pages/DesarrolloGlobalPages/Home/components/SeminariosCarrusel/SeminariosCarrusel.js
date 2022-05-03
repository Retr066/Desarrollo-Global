import { Container } from "../../../../../Container";

import { SeminariosSlides } from "./components";

export const SeminariosCarrusel = () => {
  return (
    <Container>
      <h1 className="text-3xl sm:text-4xl  font-black sm:font-extrabold leading-normal  sm:leading-loose text-center mb-7">
        Explora nuestros <span className="text-primary dark:text-sky-500 ">Seminarios</span> Gratuitos
      </h1>
      <SeminariosSlides />
    </Container>
  );
};
