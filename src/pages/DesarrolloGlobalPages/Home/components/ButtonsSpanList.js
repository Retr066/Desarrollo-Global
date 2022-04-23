import { forwardRef } from "react";
import { linksButtonSpan } from "../data";
import { ButtonSpan } from "./ButtonSpan";

export const ButtonsSpanList = forwardRef((props, ref) => {
  const { className } = props;
  return (
    <div {...props} ref={ref} className={`flex flex-wrap gap-6 ${className}`}>
      {linksButtonSpan.map((buttonSpan, index) => (
        <ButtonSpan key={index} {...buttonSpan} />
      ))}
    </div>
  );
});
