import Plyr from "plyr-react";
import "plyr-react/dist/plyr.css";
import { useRef } from "react";
import { useLayoutEffect } from "react";
import { Chat } from "./components";

export const Live = () => {
  const reactPlayerRef = useRef(null);

  useLayoutEffect(() => {
    const timer = setTimeout(() => {
      reactPlayerRef.current.plyr.source = {
        type: "video",
        sources: [
          {
            src: "xqlWyIIatao",
            provider: "youtube",
          },
        ],
      };
    }, 500);

    return () => clearTimeout(timer);
  }, [reactPlayerRef]);

  return (
    <div className="flex flex-col lg:flex-row  h-[calc(100vh_-_5.2rem)]">
      <div className="live-scroll w-full lg:w-3/4 h-auto flex flex-col overflow-y-auto scrollbar-thin scrollbar-thumb-gray-300 dark:scrollbar-thumb-gray-900 scrollbar-track-transparent ">
        {/* <ReactPlayer url="https://www.youtube.com/watch?v=_zr-ZA9HXts" width="100%" height="85%" controls={true} config={config} /> */}
        <Plyr
          ref={reactPlayerRef}
          source={{}}
          options={{
            settings: [""],
            youtube: {
              playerVars: {
                origin: "http://localhost:3000",
              },
            },
          }}
        />
        <section className="hidden lg:block h-1/5 container mx-auto px-4 py-2">
          <h1 className="text-2xl font-bold mb-2">Cómo vender al Estado a través de los Catálogos Electrónicos de Acuerdos Marco</h1>
          <div className="flex items-center justify-between overflow-hidden">
            <div className="flex items-center mr-10">
              <img
                className="inline-block h-12 w-12 m-2 rounded-full ring-2 ring-white"
                src="https://www.desarrolloglobal.pe/public/files/PROFESORA-LORENA.png"
                alt="Profesora Lórena"
              />
              <div className="flex flex-col ">
                <p className="text-lg font-bold">Expositor(a)</p>
                <p className="text-base">Lorena Ruiz</p>
              </div>
            </div>
            <div className="flex flex-col">
              <p className="text-lg font-bold text-center">Fecha de Transmisión</p>
              <div className="flex flex-row">
                <div className="flex gap-2 mr-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                  <span>22 de Marzo</span>
                </div>
                <div className="flex gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>10:00 pm</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <aside className="w-full lg:w-1/4 h-full sticky overflow-hidden top-0 flex flex-col flex-auto ">
        <Chat />
      </aside>
    </div>
  );
};
