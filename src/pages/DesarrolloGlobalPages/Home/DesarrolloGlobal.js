import SizeObserver from "../../../context/SizeObserver";
import { Entidades, ImagenPresentacion, QueOfrecemos, SeminariosCarrusel, SliderCursos, Ubicacion } from "./components";

export const DesarrolloGlobal = () => {
  return (
    <SizeObserver>
      <ImagenPresentacion />
      <QueOfrecemos />
      <SliderCursos />
      <SeminariosCarrusel />
      <Entidades />
      <Ubicacion />
    </SizeObserver>
  );
};
