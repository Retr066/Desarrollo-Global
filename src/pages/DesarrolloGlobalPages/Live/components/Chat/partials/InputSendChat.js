import { useRef } from "react";
import Picker, { SKIN_TONE_NEUTRAL } from "emoji-picker-react";
import { emmojiPickerEs } from "./utils";
import { useChat } from "./hooks";
import { MensajeError } from "../../../../../../components";

export const InputSendChat = ({ dispatch, openTab }) => {
  const inputRef = useRef(null);
  const { onEmojiClick, handleKeyDown, handleChatInputChange, handlePasteContent, setShowEmoji, showEmoji, showMessageError } = useChat({
    dispatch,
    inputRef,
  });

  return (
    <div className={openTab === 1 ? "relative w-full" : "hidden"}>
      {showMessageError && <MensajeError mensaje="Alcanzó el límite de caracteres de 300" />}
      <div
        ref={inputRef}
        contentEditable="true"
        placeholder="¡Escribe tu comentario o pregunta!"
        spellCheck="false"
        onKeyDown={handleKeyDown}
        onInput={handleChatInputChange}
        suppressContentEditableWarning={true}
        onPaste={handlePasteContent}
        className={`border ${
          showMessageError && "border-danger focus:border-danger"
        } empty:before:content-[attr(placeholder)] empty:focus:before:content-['']  live-scroll block overflow-y-auto scrollbar-thin scrollbar-thumb-gray-300 dark:scrollbar-thumb-gray-900 scrollbar-track-transparent 
         w-full  rounded-xl focus:outline-none focus:border-indigo-300 pl-4 py-2 max-h-[120px]  min-h-[32px] will-change-[height] select-text break-words pr-10  resize-none`}
      />
      <button
        onClick={() => setShowEmoji((prev) => !prev)}
        className="absolute flex items-center justify-center h-full w-12 right-0 top-0 text-gray-400 hover:text-gray-600"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          ></path>
        </svg>
      </button>
      {showEmoji && (
        <Picker
          disableSearchBar={true}
          skinTone={SKIN_TONE_NEUTRAL}
          groupNames={emmojiPickerEs}
          onEmojiClick={onEmojiClick}
          pickerStyle={{ width: "100%" }}
        />
      )}
    </div>
  );
};
