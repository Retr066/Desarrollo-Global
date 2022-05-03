import React from "react";
import { Link } from "react-router-dom";
import { Logo } from "../../../../../../components";
import bannerSeminario from "../../../../../../assets/imgs/banner-seminario.png";
export const SeminarioSlide = () => {
  return (
    <div className="flex flex-col-reverse md:flex-row bg-slate-200 dark:bg-secondary-dark dark:text-white rounded-3xl">
      <div className="w-full md:w-1/2 flex flex-col justify-between ">
        <Logo className="w-[170px] mx-4 xs:mx-10 sm:mx-10 mt-8" />
        <h2 className="my-4 font-bold ml-4 xs:ml-10 sm:ml-10 xl:pr-6">
          Contratos Colaborativos y el uso del BIM en el Marco de INVIERTE.PE
        </h2>
        <Link className="flex text-danger ml-4 xs:ml-10 sm:ml-10" to="/seminarios">
          <p className="mr-2 font-extrabold mb-4">Ver más</p>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </Link>
        <div className="flex flex-col mx-4 xs:mx-10 sm:mx-10 xl:pr-6">
          <div className="flex items-center mb-2">
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
            <p className="ml-3 text-sm">7:00 pm</p>
          </div>
          <div className="flex items-center mb-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 "
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
              />
            </svg>
            <p className="text-sm ml-3">Metodología asincronica</p>
          </div>
          <div className="flex mb-2 items-end">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
            <p className="ml-3  text-sm">Eduardo Ulloa</p>
          </div>
        </div>
        <div className="w-full py-4 self-end flex justify-center bg-primary rounded-b-3xl md:rounded-b-none md:rounded-bl-3xl">
          <span className="text-white font-extralight">Inicia 20 de Junio</span>
        </div>
      </div>
      <div className="w-full md:w-1/2 flex ">
        <img
          className="object-cover object-bottom rounded-t-3xl md:rounded-tl-none  md:rounded-r-3xl"
          src={bannerSeminario}
          alt="seminarios"
        />
      </div>
    </div>
  );
};
