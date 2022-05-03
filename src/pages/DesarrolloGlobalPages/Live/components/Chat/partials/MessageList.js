import { useEffect, useRef } from "react";
import { MessageItem } from "./MessageItem";
import { SinComentarios } from "./SinComentarios";

export const MessageList = ({ messages, openTab }) => {
  const messagesEndRef = useRef(null);

  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({
        behavior: "smooth",
        block: "end",
        inline: "nearest",
      });
    }
  });

  return (
    <div
      className={`${
        openTab === 1 ? "" : "hidden"
      }  live-scroll overflow-y-auto scrollbar-thin scrollbar-thumb-gray-300 dark:scrollbar-thumb-gray-900 scrollbar-track-transparent flex flex-col h-full overflow-x-auto mb-4`}
    >
      <div className="flex flex-col  h-full">
        {messages.length === 0 && <SinComentarios />}
        {messages.map((message) => {
          return <MessageItem key={message.id} {...message} />;
        })}
        <div ref={messagesEndRef} />
      </div>
    </div>
  );
};
