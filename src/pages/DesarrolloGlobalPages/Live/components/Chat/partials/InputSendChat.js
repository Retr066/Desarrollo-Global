import React, { useRef, useState } from "react";
import Picker, { SKIN_TONE_NEUTRAL } from "emoji-picker-react";
import { emmojiPickerEs } from "./utils";
import { typesActionReducers } from "../../../../../../types";

export const InputSendChat = ({ dispatch }) => {
  const [chosenEmoji, setChosenEmoji] = useState("");
  const [showEmoji, setShowEmoji] = useState(false);
  const inputRef = useRef(null);

  const setCursorToEnd = (element) => {
    var range = document.createRange();
    var sel = window.getSelection();
    range.setStart(element, 1);
    range.collapse(true);
    sel.removeAllRanges();
    sel.addRange(range);
    element.focus();
  };

  const onEmojiClick = (_, emojiObject) => {
    inputRef.current.textContent += emojiObject.emoji;
    setChosenEmoji((prev) => {
      return `${prev}${emojiObject.emoji}`;
    });
    setShowEmoji(false);
    const { current: element } = inputRef;
    setCursorToEnd(element);
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter" && !event.shiftKey) {
      event.preventDefault();

      dispatch({
        type: typesActionReducers.ADD_MESSAGE,
        payload: {
          id: Date.now(),
          img: "https://i.pravatar.cc/100",
          nombre: "Juan",
          tiempo: "Hace 14 min",
          mensaje: chosenEmoji,
        },
      });
      setChosenEmoji("");
      inputRef.current.textContent = "";
    }
  };

  return (
    <>
      <div
        ref={inputRef}
        contentEditable="true"
        placeholder="¡Escribe tu comentario o pregunta!"
        spellCheck="false"
        onKeyDown={handleKeyDown}
        onInput={(event) => setChosenEmoji(event.target.innerText)}
        suppressContentEditableWarning={true}
        className="empty:before:content-[attr(placeholder)] empty:focus:before:content-['']   live-scroll block overflow-y-auto scrollbar-thin scrollbar-thumb-gray-300 dark:scrollbar-thumb-gray-900 scrollbar-track-transparent  w-full border rounded-xl focus:outline-none focus:border-indigo-300 pl-4 py-2 max-h-[120px]  min-h-[32px] will-change-[height] select-text break-words pr-10  resize-none"
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
    </>
  );
};
