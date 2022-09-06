import { DownloadIcon } from "@heroicons/react/outline";
import { ButtonPrimary } from "../../../../../components";
import { Container } from "../../../../../Container";
import "../../styles/collapseTemario.css";
import { TemarioItem } from "./TemarioItem";

export const Temario = ({ sesiones }) => {
  return (
    <Container
      style={{
        maxWidth: "1152px",
      }}
      className="flex items-center justify-center lg:justify-start py-7"
      classNameContent="bg-white dark:bg-secondary"
    >
      <div className="w-full  max-w-[744px]  ">
        <h3 className="font-extrabold text-xl mb-3">Temario del curso</h3>
        <ButtonPrimary tipo="outline" className="mb-7">
          <a
            className="flex justify-center items-center gap-2"
            target="_blank"
            href="https://s3-us-west-2.amazonaws.com/uploads-desarrolloglobal.pe/2022/04/temporal-temporal-Temario_Poi_Pia_Pei_compressed%2520%25281%2529.pdf"
            rel="noreferrer"
          >
            <DownloadIcon className="w-5 h-5" />
            Descargar Brochure
          </a>
        </ButtonPrimary>

        <div className="accordion  flex flex-col gap-4" id="accordionExample5">
          {sesiones?.map((temario, index) => {
            return <TemarioItem key={index} indice={index} {...temario} />;
          })}
        </div>
      </div>
    </Container>
  );
};
