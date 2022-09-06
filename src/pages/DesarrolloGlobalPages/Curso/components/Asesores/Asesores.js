import { Link } from "react-router-dom";
import { IconWhatsApp } from "../../../../../assets/svgs";
import { Container } from "../../../../../Container";

export const Asesores = () => {
  return (
    <Container
      style={{
        maxWidth: "1152px",
      }}
      className="flex items-center justify-center lg:justify-start py-7 "
      classNameContent="bg-slate-200 dark:bg-secondary-dark"
    >
      <div className="w-full  max-w-[744px]  ">
        <h3 className="text-xl font-extrabold">Comunícate con un asesor</h3>
        <p className="mb-7">Contáctenos y te brindaremos un descuento especial :)</p>
        <div className="flex items-center justify-center gap-4 mb-7">
          <button className="flex items-center justify-center gap-3 px-4 py-2 transition-all duration-150 bg-green-500 rounded-lg shadow-lg hover:bg-green-400 shadow-green-500/50 ">
            <IconWhatsApp className="w-10 h-10 text-white" />
            <p className="font-bold">993 403 219</p>
          </button>
          <button className="flex items-center justify-center gap-3 px-4 py-2 transition-all duration-150 bg-green-500 rounded-lg shadow-lg hover:bg-green-400 shadow-green-500/50">
            <IconWhatsApp className="w-10 h-10 text-white" />
            <p className="font-bold">993 403 219</p>
          </button>
        </div>
        <Link to="/inhouse">
          <img
            className="rounded-lg shadow-lg shadow-primary/50 bg-primary"
            src="https://archivos-comunes.s3.amazonaws.com/2021/web/solic_inhouse.png"
            alt="solicitud-inhouse"
          />
        </Link>
      </div>
    </Container>
  );
};
