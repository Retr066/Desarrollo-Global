import { useReducer, useState } from "react";
import { ChatReducer } from "../../../../../reducers";
import { initialState } from "../../../../../reducers/ChatReducer";
import { Descripcion } from "./partials";
import { InputSendChat, MessageList, Tabs } from "./partials";
export const Chat = () => {
  const [openTab, setOpenTab] = useState(2);
  const [state, dispatch] = useReducer(ChatReducer, initialState);
  const { messages } = state;
  return (
    <div className="flex flex-col flex-auto flex-shrink-0 h-full p-2 border-none xl:border-l-2">
      <Tabs openTab={openTab} setOpenTab={setOpenTab} />
      {/* Tab numero 1 */}
      <MessageList openTab={openTab} messages={messages} />
      <InputSendChat openTab={openTab} dispatch={dispatch} />
      {/* Tab numero 2 */}
      <Descripcion openTab={openTab} />
    </div>
  );
};
