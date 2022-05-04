import { useEffect, useState } from "react";
import { typesActionReducers } from "../../../../../../../types";

export const useChat = ({ dispatch, inputRef }) => {
  const [chosenEmoji, setChosenEmoji] = useState("");
  const [showEmoji, setShowEmoji] = useState(false);
  const [showMessageError, setShowMessageError] = useState(false);

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
      if (validateMessage()) return;
      console.log(chosenEmoji);
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
  const handleChatInputChange = (event) => {
    setChosenEmoji(event.target.innerText);
  };

  useEffect(() => {
    if (chosenEmoji.length > 300) {
      setShowMessageError(true);
    } else {
      setShowMessageError(false);
    }
  }, [chosenEmoji]);

  const validateMessage = () => {
    if (chosenEmoji.length > 0 && chosenEmoji.length <= 300) {
      return false;
    }
    return true;
  };

  const handlePasteContent = (e) => {
    e.preventDefault();
    var text = (e.originalEvent || e).clipboardData.getData("text/plain");
    document.execCommand("insertHTML", false, text);
  };

  return {
    handlePasteContent,
    handleChatInputChange,
    onEmojiClick,
    handleKeyDown,
    setShowEmoji,
    showEmoji,
    showMessageError,
  };
};
