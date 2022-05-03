import { useReducer, useState } from "react";
import { IconTelegram, IconWhatsApp } from "../../../../../assets/svgs/IconsSocialMedia";
import { ChatReducer } from "../../../../../reducers";
import { initialState } from "../../../../../reducers/ChatReducer";
import { InputSendChat, MessageList, Tabs } from "./partials";
export const Chat = () => {
  const [openTab, setOpenTab] = useState(1);
  const [state, dispatch] = useReducer(ChatReducer, initialState);
  const { messages } = state;
  return (
    <div className="flex flex-col flex-auto flex-shrink-0  border-none xl:border-l-2  h-full p-2">
      <Tabs openTab={openTab} setOpenTab={setOpenTab} />
      <MessageList openTab={openTab} messages={messages} />
      <div id="chat" className={openTab === 1 ? "relative w-full" : "hidden"}>
        <InputSendChat dispatch={dispatch} />
      </div>
      <div
        className={
          openTab === 2
            ? "flex flex-col h-full overflow-x-auto live-scroll overflow-y-auto scrollbar-thin scrollbar-thumb-gray-300 dark:scrollbar-thumb-gray-900 scrollbar-track-transparent"
            : "hidden"
        }
        id="descripcion"
      >
        <p className="text-2xl font-black text-center ">
          Seminario en <span className="text-danger">Vivo</span>
        </p>
        <p className="mb-5 text-lg font-bold">Cómo vender al Estado a través de los Catálogos Electrónicos de Acuerdos Marco</p>
        <p className="text-xl font-bold">Sobre el docente</p>
        <div className="flex items-center mr-10">
          <img
            className="inline-block h-10 w-10 m-2 rounded-full ring-2 ring-white"
            src="https://www.desarrolloglobal.pe/public/files/PROFESORA-LORENA.png"
            alt="Profesora Lórena"
          />
          <p className="text-lg font-semibold">Lorena Ruiz</p>
        </div>
        <p className="mb-5">
          Licenciada en Administración de Empresas por la UNMSM.Con 11 años de Experiencia en Contrataciones Estatales a través de ASP y
          Catálogos Electrónicos Empresaria, Gerente General de Grupo Maljhar S.A.C. Capacitadora de pymes en temas de Compras Estatales.
        </p>
        <a
          href="/cursos"
          target="_blank"
          rel="noreferrer"
          className="text-xl font-bold mb-5 underline underline-offset-2 hover:text-gray-700 dark:hover:text-gray-300 transition-all duration-150 "
        >
          Mas Info del Programa
        </a>
        <div className="flex flex-col justify-center items-center gap-4">
          <a
            href="https://chat.whatsapp.com/Gi2pfJv5SeuCav84eyEiRI"
            target="_blank"
            rel="noreferrer"
            className="flex justify-center items-center gap-2 bg-green-500 p-3 w-full max-w-[320px] rounded-md hover:bg-green-600 transition-all duration-150 shadow-lg shadow-green-500/50"
          >
            <IconWhatsApp />
            <p>Grupo Privado de WhatsApp</p>
          </a>
          <a
            href="https://t.me/DesarrolloGlobal"
            target="_blank"
            rel="noreferrer"
            className="flex justify-center items-center gap-2 bg-sky-500 p-3 w-full  max-w-[320px] rounded-md hover:bg-sky-600 transition-all duration-150 shadow-lg shadow-sky-500/50"
          >
            <IconTelegram />
            <p>Grupo Privado de Telegram</p>
          </a>
        </div>
      </div>
    </div>
  );
};
