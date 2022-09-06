import { PlayIcon } from "@heroicons/react/outline";
import { useEffect, useRef, useState } from "react";
import { useHoverDirty } from "react-use";

export const BotonImageTrailer = ({ curso, setIsVisible, setPlay, isVisible }) => {
  const playTrailerElement = useRef(null);
  const isHovering = useHoverDirty(playTrailerElement);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [setIsVisible]);
  return (
    <button
      ref={playTrailerElement}
      onClick={() => setPlay((prev) => !prev)}
      data-bs-toggle="modal"
      data-bs-target="#ModalVideoTrailer"
      type="button"
      className={`${
        isVisible ? "h-[230px]" : "h-0 "
      }  relative block w-full outline-none border-none overflow-hidden transition-all duration-500 ease-in rounded-t-lg`}
    >
      <div className="block overflow-hidden absolute inset-0 box-border m-0 ">
        <img id="curso" src={curso.image} alt={curso.titulo} className="min-h-[230px] w-full object-cover " />
      </div>

      <div
        style={{
          background: "rgba(7, 14, 39, 0.5)",
        }}
        className={`${
          isHovering ? "opacity-100" : "opacity-0"
        } absolute top-0 left-0 flex items-center justify-center w-full h-full z-2 transition-all duration-150`}
      >
        <PlayIcon className="w-7 h-7 text-white" />
        <span className="ml-4 text-white font-bold text-lg">Mira el Trailer</span>
      </div>
    </button>
  );
};
