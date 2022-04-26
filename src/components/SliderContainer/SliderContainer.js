import { useCallback, useContext, useRef } from "react";

import { SizeContext } from "../../context";
import { useAnimationFrame } from "./hooks";
export const SliderContainer = ({ children, initialOffsetX, className, contentWidth, direction = "left" }) => {
  const { innerWidth } = useContext(SizeContext);
  const refSrollX = useRef(initialOffsetX);
  const refContainer = useRef(null);
  const refContent = useRef(null);

  const enabled = innerWidth < contentWidth;

  useAnimationFrame(
    enabled,
    useCallback(() => {
      const { current: elContainer } = refContainer;
      const { current: elContent } = refContent;
      if (elContainer && elContent) {
        if (direction === "left") {
          refSrollX.current += 1;
          elContainer.scrollLeft = refSrollX.current;
          if (elContainer.scrollLeft >= elContent.clientWidth) {
            refSrollX.current = 0;
            elContainer.scrollLeft = 0;
          }
        }
        if (direction === "right") {
          refSrollX.current -= 1;
          elContainer.scrollLeft = refSrollX.current;
          if (elContainer.scrollLeft <= 0) {
            refSrollX.current = elContent.clientWidth;
            elContainer.scrollLeft = elContent.clientWidth;
          }
        }
      }
    }, [direction])
  );
  return (
    <div ref={refContainer} className={`slider-container overflow-hidden whitespace-nowrap max-w-full ${className}`}>
      <div ref={refContent} className={"inline-block"}>
        {children}
      </div>
      <div className={`${enabled ? "inline-block" : "hidden"} `}>{children}</div>
    </div>
  );
};

export const SliderItem = ({ children, width }) => {
  return (
    <div
      className="inline-flex justify-center items-center mx-2 transition duration-200 hover:scale-105 hover:drop-shadow-md p-3 overflow-x-hidden "
      style={{ width }}
    >
      {children}
    </div>
  );
};
