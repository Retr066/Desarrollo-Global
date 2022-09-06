import Plyr from "plyr-react";
import { useCallback, useEffect, useRef } from "react";
export const VideoTrailer = ({ play, setPlay }) => {
  const reactPlayerRef = useRef(null);
  const modalContentRef = useRef(null);
  const src = "xqlWyIIatao";
  const provider = "youtube";
  const videoOptions = {
    settings: [""],
    autoplay: true,
    autopause: true,
  };

  const cerrarModal = useCallback(
    (e) => {
      if (e.target === modalContentRef.current) {
        reactPlayerRef.current?.plyr?.pause();
        setPlay((prev) => !prev);
      }
    },
    [modalContentRef, setPlay]
  );

  useEffect(() => {
    if (play) {
      document.body.classList.add("overflow-y-hidden");
      document.body.style.paddingRight = `${17}px`;
    } else {
      document.body.classList.remove("overflow-y-hidden");
      document.body.style.paddingRight = "";
    }
  }, [play]);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (play) {
        reactPlayerRef.current.plyr.source = {
          type: "video",
          sources: [
            {
              src: src,
              provider: provider,
            },
          ],
        };
      }
    }, 500);

    return () => clearTimeout(timer);
  }, [play]);

  return (
    <div
      onClick={cerrarModal}
      className="modal fade fixed top-0 left-0 hidden w-full h-full outline-none overflow-x-hidden overflow-y-auto"
      id="ModalVideoTrailer"
      tabIndex={-1}
      aria-labelledby="Modal Trailer"
      data-bs-keyboard="false"
      aria-modal="true"
      role="dialog"
      ref={modalContentRef}
    >
      <div className="modal-dialog modal-lg modal-dialog-centered relative w-auto pointer-events-none">
        <div className="modal-content border-none shadow-lg relative flex flex-col w-full pointer-events-auto bg-white bg-clip-padding rounded-md outline-none text-current">
          <Plyr ref={reactPlayerRef} source={{}} options={videoOptions} />
        </div>
      </div>
    </div>
  );
};
