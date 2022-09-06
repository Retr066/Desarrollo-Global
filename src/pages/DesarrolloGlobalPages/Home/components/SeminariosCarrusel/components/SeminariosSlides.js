import useEmblaCarousel from "embla-carousel-react";
import { SeminarioSlide } from "./SeminarioSlide";
import "../styles/embla.css";
import { useCallback, useEffect, useState } from "react";
import { NextButton, PrevButton } from "./SeminariosCarruselButton";

export const SeminariosSlides = () => {
  const [viewportRef, embla] = useEmblaCarousel({ loop: false, skipSnaps: false, dragFree: false, draggable: false });
  const seminarios = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const SCALE_FACTOR = 3;

  const numberWithinRange = (number, min, max) => Math.min(Math.max(number, min), max);

  const [prevBtnEnabled, setPrevBtnEnabled] = useState(false);
  const [nextBtnEnabled, setNextBtnEnabled] = useState(false);
  const [posicionActualSlide, setPosicionActualSlide] = useState(1);
  const [scaleValues, setScaleValues] = useState([]);

  const scrollPrev = useCallback(() => embla && embla.scrollPrev(), [embla]);
  const scrollNext = useCallback(() => embla && embla.scrollNext(), [embla]);

  const onSelect = useCallback(() => {
    if (!embla) return;
    setPrevBtnEnabled(embla.canScrollPrev());
    setPosicionActualSlide(embla.selectedScrollSnap() + 1);
    setNextBtnEnabled(embla.canScrollNext());
  }, [embla]);

  const onScroll = useCallback(() => {
    if (!embla) return;

    const engine = embla.internalEngine();
    const scrollProgress = embla.scrollProgress();

    const styles = embla.scrollSnapList().map((scrollSnap, index) => {
      if (!embla.slidesInView().includes(index)) return 0;
      let diffToTarget = scrollSnap - scrollProgress;

      if (engine.options.loop) {
        engine.slideLooper.loopPoints.forEach((loopItem) => {
          const target = loopItem.getTarget();
          if (index === loopItem.index && target !== 0) {
            const sign = Math.sign(target);
            if (sign === -1) diffToTarget = scrollSnap - (1 + scrollProgress);
            if (sign === 1) diffToTarget = scrollSnap + (1 - scrollProgress);
          }
        });
      }
      const scale = 1 - Math.abs(diffToTarget * SCALE_FACTOR);
      return numberWithinRange(scale, 0, 1);
    });
    setScaleValues(styles);
  }, [embla, setScaleValues]);

  useEffect(() => {
    if (!embla) return;
    onSelect();
    onScroll();
    embla.on("select", onSelect);
    embla.on("scroll", onScroll);
    embla.on("resize", onScroll);
  }, [embla, onSelect, onScroll]);

  useEffect(() => {}, [embla]);

  return (
    <div className="relative mx-auto  max-w-full sm:max-w-[95%] xl:max-w-[1000px]  ">
      <div className="embla__viewport" ref={viewportRef}>
        <div className="embla__container-seminarios">
          {seminarios.map((seminario, index) => (
            <div className="embla__slide-seminarios" key={index}>
              <div
                className="relative flex overflow-hidden origin-center h-[45rem] xs:h-[52rem]  sm:h-[58rem] md:h-[26rem] lg:h-[32rem] xl:h-[30rem] "
                style={{ transform: `scale(${scaleValues[index]})` }}
              >
                <div className="embla__slide__img">
                  <SeminarioSlide {...seminario} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="flex items-center  justify-center w-full mt-4 ">
        <div className="flex items-center ">
          <PrevButton onClick={scrollPrev} enabled={prevBtnEnabled} aria-label="Atrás" />
          <p className="w-40 font-gil text-14 leading-18 tracking-4 flex items-center justify-center text-center ">
            <span className="font-bold mr-1">{posicionActualSlide}</span>/ {seminarios.length}
          </p>
          <NextButton onClick={scrollNext} enabled={nextBtnEnabled} aria-label="Siguiente" />
        </div>
      </div>
    </div>
  );
};
