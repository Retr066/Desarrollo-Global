import { SliderContainer } from "../../../../../components";
import { SliderItem } from "../../../../../components/SliderContainer/SliderContainer";

const cursos = [
  {
    src: "https://s3-us-west-2.amazonaws.com/uploads-desarrolloglobal.pe/2021/07/Edited_20210730_095455.jpg",
    alt: "Curso de desarrollo web 1",
    width: "20vw",
  },
  {
    src: "https://s3-us-west-2.amazonaws.com/uploads-desarrolloglobal.pe/2021/07/Edited_20210730_095455.jpg",
    alt: "Curso de desarrollo web 2",
    width: "20vw",
  },
  {
    src: "https://s3-us-west-2.amazonaws.com/uploads-desarrolloglobal.pe/2021/07/Edited_20210730_095455.jpg",
    alt: "Curso de desarrollo web 3",
    width: "20vw",
  },
  {
    src: "https://s3-us-west-2.amazonaws.com/uploads-desarrolloglobal.pe/2021/07/Edited_20210730_095455.jpg",
    alt: "Curso de desarrollo web 4",
    width: "20vw",
  },
  {
    src: "https://s3-us-west-2.amazonaws.com/uploads-desarrolloglobal.pe/2021/07/Edited_20210730_095455.jpg",
    alt: "Curso de desarrollo web 5",
    width: "20vw",
  },
  {
    src: "https://s3-us-west-2.amazonaws.com/uploads-desarrolloglobal.pe/2021/07/Edited_20210730_095455.jpg",
    alt: "Curso de desarrollo web 6",
    width: "20vw",
  },
];

const diplomas = [
  {
    src: "https://www.desarrolloglobal.pe/load-image?dip=2122&w_img=780",
    alt: "Diploma de desarrollo web 1",
    width: "20vw",
  },
  {
    src: "https://www.desarrolloglobal.pe/load-image?dip=2122&w_img=780",
    alt: "Diploma de desarrollo web 2",
    width: "20vw",
  },
  {
    src: "https://www.desarrolloglobal.pe/load-image?dip=2122&w_img=780",
    alt: "Diploma de desarrollo web 3",
    width: "20vw",
  },
  {
    src: "https://www.desarrolloglobal.pe/load-image?dip=2122&w_img=780",
    alt: "Diploma de desarrollo web 4",
    width: "20vw",
  },
  {
    src: "https://www.desarrolloglobal.pe/load-image?dip=2122&w_img=780",
    alt: "Diploma de desarrollo web 5",
    width: "20vw",
  },
  {
    src: "https://www.desarrolloglobal.pe/load-image?dip=2122&w_img=780",
    alt: "Diploma de desarrollo web 6",
    width: "20vw",
  },
];

export const SliderCursos = () => {
  return (
    <>
      <h1 className="text-3xl font-extrabold  leading-loose text-center">
        Explora nuestros <span className="text-primary dark:text-dark">Cursos y Diplomas</span> de Alta Especialización
      </h1>
      <SliderContainer className="" contentWidth={100000} initialOffsetX={0} direction="right">
        {cursos.map((curso, index) => (
          <SliderItem key={index} width={curso.width}>
            <img className="object-contain rounded-md" src={curso.src} alt={curso.alt} />
          </SliderItem>
        ))}
      </SliderContainer>
      <SliderContainer className="" contentWidth={100000} initialOffsetX={0} direction="left">
        {diplomas.map((diploma, index) => (
          <SliderItem key={index} width={diploma.width}>
            <img className="object-contain rounded-md" src={diploma.src} alt={diploma.alt} />
          </SliderItem>
        ))}
      </SliderContainer>
    </>
  );
};
