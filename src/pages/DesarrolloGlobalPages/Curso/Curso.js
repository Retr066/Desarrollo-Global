import { useParams } from "react-router-dom";
import { obtenerCursoPorSlug } from "../../../utils";
import { NotFound } from "../NotFound";

import {
  CabezeraCurso,
  PresentacionCurso,
  Temario,
  VideoTrailer,
  AsideCursoCard,
  CalidadGarantizadaIso,
  Beneficios,
  Certificacion,
  Horarios,
  Inversion,
  Asesores,
  Comentarios,
  ComoPagar,
  AsideCursoCardResponsive,
} from "./components";

import { useState } from "react";

export const Curso = () => {
  const [play, setPlay] = useState(false);

  const { slug } = useParams();
  const curso = obtenerCursoPorSlug(slug);
  if (!curso) {
    return <NotFound />;
  }

  return (
    <div className="relative">
      <AsideCursoCard setPlay={setPlay} curso={curso} />
      <CabezeraCurso curso={curso} />
      <PresentacionCurso />
      <Temario sesiones={curso.sesiones} />
      <CalidadGarantizadaIso />
      <Beneficios />
      <Certificacion titulo={curso.titulo} />
      <Horarios />
      <Inversion curso={curso} />
      <ComoPagar />
      <Asesores />
      <Comentarios />
      <AsideCursoCardResponsive curso={curso} />
      <VideoTrailer play={play} setPlay={setPlay} />
    </div>
  );
};
