import { Container } from "../../../../../Container";
import { ButtonPrimary } from "../../../../../components";
import { ChevronDoubleRightIcon, CreditCardIcon } from "@heroicons/react/outline";
import { ShieldCheckIcon } from "@heroicons/react/solid";
import Tarjetas from "../../../../../assets/imgs/tarjetas.png";
export const ComoPagar = () => {
  return (
    <Container
      style={{
        maxWidth: "1152px",
      }}
      className="flex items-center justify-center lg:justify-start py-7 "
      classNameContent="bg-white dark:bg-secondary"
    >
      <div className="w-full  max-w-[744px]  ">
        <h3 className="font-extrabold text-xl">¿Cómo Pagar?</h3>
        <p className="mb-7">Elige la opción mas conveniente para ti</p>
        <div className="flex flex-col p-4 px-10 bg-slate-100 dark:bg-secondary-dark rounded-lg shadow-lg gap-3 mb-7">
          <h4 className="text-xl font-bold ">1. Pago con Tarjeta</h4>
          <p>Puedes pagar en linea de manera segura desde nuestra pasarela de pago de IZIPAY y PAGO EFECTIVO con total seguridad.</p>
          <div className="flex flex-col gap-3 items-center justify-center">
            <ButtonPrimary className="w-full" tipo="outline">
              <div className="flex gap-3 items-center justify-center ">
                <CreditCardIcon className="w-10 h-10 " strokeWidth={1} />
                <p>Pagar con Tarjeta de Crédito/Débito</p>
              </div>
            </ButtonPrimary>
            <img className="w-70" src={Tarjetas} alt="Tarjetas de pago virtual" />
            <div className="flex items-center gap-3">
              <ShieldCheckIcon className="w-10 h-10 text-green-500" />
              <p>Pagos seguros encriptados con seguridad SSL</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col p-4 px-10 bg-slate-100 dark:bg-secondary-dark rounded-lg shadow-lg gap-3">
          <h4 className="text-xl font-bold ">2. Pago por Transferencia y/o depósito</h4>
          <p>
            Puedes pagar de manera directa desde tu aplicativo de banco vía transferencia a cualquiera de nuestras cuentas bancarias, luego
            envíanos la foto del voucher al WhatsApp para confirmar tu inscripción.
          </p>
          <div className="flex flex-col gap-3 items-center justify-center">
            <img className="w-70 mb-4" src="https://archivos-comunes.s3.amazonaws.com/2021/web/bancos.png" alt="Tarjetas de pago virtual" />
            <div className="flex items-center gap-2 cursor-pointer">
              <ChevronDoubleRightIcon className="w-5 h-5 text-blue-900" />
              <p className="text-primary hover:text-primary-light">Ver Números de cuentas Disponibles</p>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};
