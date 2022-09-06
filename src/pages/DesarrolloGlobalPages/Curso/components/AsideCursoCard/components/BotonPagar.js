import { CreditCardIcon } from "@heroicons/react/outline";
import React from "react";
import { ButtonPrimary } from "../../../../../../components";

export const BotonPagar = ({ style }) => {
  return (
    <ButtonPrimary style={style} className="flex justify-center items-center gap-2 mb-6" tipo="outline">
      <CreditCardIcon className="w-9 h-9" strokeWidth={1} />
      <p className="text-base">Pagar en Linea</p>
    </ButtonPrimary>
  );
};
