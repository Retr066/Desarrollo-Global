import { ButtonInfo } from "../../buttons";

export const BannerInformacion = () => {
  return (
    <div className="flex justify-center items-center" role="alert">
      <p className="font-bold text-lg tracking-tight">¡Todo el Mes de Abril descuentos hasta el 50% dto en nuestros Cursos y Diplomas!</p>
      <ButtonInfo
        classSpan="font-bold"
        style={{
          borderRadius: "0px",
        }}
      >
        Ver Oferta
      </ButtonInfo>
    </div>
  );
};
