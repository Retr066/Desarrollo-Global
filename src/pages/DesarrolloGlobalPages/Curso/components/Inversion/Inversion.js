import { IconPayHand } from "../../../../../assets/svgs";
import { Container } from "../../../../../Container";

export const Inversion = ({ curso }) => {
  return (
    <Container
      style={{
        maxWidth: "1152px",
      }}
      className="flex items-center justify-center lg:justify-start py-7 "
      classNameContent="bg-slate-200 dark:bg-secondary-dark"
    >
      <div className="w-full  max-w-[744px]">
        <h3 className="font-extrabold text-xl">Inversión</h3>
        <p className="mb-7">Todos los precios incluyen IGV</p>
        <div className="flex flex-col gap-4  sm:flex-row justify-evenly bg-white dark:bg-secondary items-center py-5 rounded-lg shadow-lg">
          <div className="flex items-center">
            <IconPayHand className=" w-20 h-20  text-primary dark:text-white" />
            <p className="ml-4 font-bold text-2xl  text-center">Al contado</p>
          </div>
          <div className="flex flex-col items-center">
            <p className="text-gray-600 font-bold  text-xl text-center">Precio Normal</p>
            <p className="line-through font-bold text-xl">S/{curso.precioSinDescuento.toFixed(2)}</p>
          </div>
          <div className="flex flex-col items-center">
            <p className="text-gray-600 font-bold text-xl  text-center">Precio con Descuento</p>
            <p className="font-bold text-xl">S/{curso.precioConDescuento.toFixed(2)}</p>
          </div>
        </div>
      </div>
    </Container>
  );
};
