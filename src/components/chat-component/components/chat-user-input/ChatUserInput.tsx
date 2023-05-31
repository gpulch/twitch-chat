import React, { KeyboardEvent } from "react";
import * as Styles from "./ChatUserInput.styles";
import { EmojiPicker } from "../emoji-picker";

type ChatUserInputProps = {
  sendMessage: Function;
  myMessage: string;
  setMyMessage: React.Dispatch<React.SetStateAction<string>>;
};

export const ChatUserInput = ({
  sendMessage,
  myMessage,
  setMyMessage,
}: ChatUserInputProps) => {
  const handleMessageInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setMyMessage(event.target.value);
  };

  const handleKeyboardEvent = (e: KeyboardEvent) => {
    if (e.key === "Enter") {
      sendMessage();
    }
  };

  const onEmojiClick = (newEmoji: string) => {
    setMyMessage(myMessage + newEmoji);
  };

  return (
    <Styles.InputWithEmojiButton>
      <Styles.MyMessageInput
        autoFocus
        value={myMessage}
        onInput={handleMessageInput}
        placeholder={"Send a chat message"}
        onKeyDown={handleKeyboardEvent}
      />
      <EmojiPicker onChange={onEmojiClick} />
    </Styles.InputWithEmojiButton>
  );
};
