import { Container } from "../../../../../Container";
import hombreCruzado from "../../../../../assets/imgs/hombre-cruzado.png";
import certificadoMasIso from "../../../../../assets/imgs/iso-con-certificado-blanco.png";
export const CalidadGarantizadaIso = () => {
  return (
    <Container
      style={{
        maxWidth: "1152px",
      }}
      className="flex items-center justify-center lg:justify-start pt-7 pb-0"
      classNameContent="bg-slate-200 dark:bg-secondary-dark"
    >
      <div className="w-full  max-w-[744px]  ">
        <div className="flex">
          <div className="flex py-16 justify-evenly flex-col w-full sm:w-1/2">
            <h5 className="font-extrabold text-3xl">Calidad de Enseñanza Garantizada</h5>
            <p className="mb-3">
              <span className="font-extrabold">Centro de Capacitación y Desarrollo Global</span> , cuenta con certificación{" "}
              <span className="font-extrabold">ISO 9001-2015.</span>
            </p>
            <h5 className="font-extrabold text-base">EN PROGRAMAS DE CAPACITACIÓN VIRTUAL</h5>
            <img src={certificadoMasIso} className="max-w-[400px]" alt="Cetificacion Iso 9001" />
            <span className="font-extrabold text-base">COD N° C018.00048/U</span>
          </div>
          <div className="hidden sm:flex w-1/2 ">
            <img src={hombreCruzado} alt="Hombre Cruzado" className="w-full h-full" />
          </div>
        </div>
      </div>
    </Container>
  );
};
