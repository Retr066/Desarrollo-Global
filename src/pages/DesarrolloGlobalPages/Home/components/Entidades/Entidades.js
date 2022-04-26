import { Container } from "../../../../../Container";
import useEmblaCarousel from "embla-carousel-react";
import agrorural from "../../../../../assets/imgs/logo-agrorural.png";
import essalud from "../../../../../assets/imgs/logo-Essalud.png";
import mef from "../../../../../assets/imgs/logo-mef.png";
import minedu from "../../../../../assets/imgs/logo-minedu.png";
import osinergmin from "../../../../../assets/imgs/logo-osinergmin.png";
import Autoplay from "embla-carousel-autoplay";
import "./styles/embla.css";
export const Entidades = () => {
  const autoplay = Autoplay({
    loop: false,
    stopOnInteraction: false,
  });

  const [emblaRef] = useEmblaCarousel(
    {
      loop: true,
      slidesToScroll: 1,
      slidesToShow: 4,
      startIndex: 0,
      containScroll: true,
      draggable: true,
      dragFree: true,
    },
    [autoplay]
  );

  return (
    <Container>
      <h1 className="text-4xl font-extrabold mb-7 leading-loose text-center">
        Entidades que confían en <span className="text-primary dark:text-dark">Desarrollo Global</span>
      </h1>
      <div className="embla" ref={emblaRef}>
        <div className="embla__container">
          <div className="embla__slide">
            <img
              style={{
                minWidth: "500px",
              }}
              src={agrorural}
              alt="Agrorural"
            />
          </div>
          <div className="embla__slide">
            <img
              style={{
                minWidth: "500px",
              }}
              src={essalud}
              alt="Essalud"
            />
          </div>
          <div className="embla__slide">
            <img
              style={{
                minWidth: "450px",
              }}
              src={mef}
              alt="Mef"
            />
          </div>
          <div className="embla__slide">
            <img
              style={{
                minWidth: "500px",
              }}
              src={minedu}
              alt="Minedu"
            />
          </div>
          <div className="embla__slide">
            <img
              style={{
                minWidth: "500px",
              }}
              src={osinergmin}
              alt="Osinergmin"
            />
          </div>
        </div>
      </div>
    </Container>
  );
};
