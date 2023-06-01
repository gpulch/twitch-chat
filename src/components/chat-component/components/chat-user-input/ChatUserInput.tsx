import React, { KeyboardEvent } from "react";
import * as Styles from "./ChatUserInput.styles";
import { EmojiPicker } from "../emoji-picker";
import { ReplyPopover } from "./reply-popover";
import { IsReplying } from "../../Chat.types";

type ChatUserInputProps = {
  sendMessage: Function;
  myMessage: string;
  setMyMessage: React.Dispatch<React.SetStateAction<string>>;
  isReplying: IsReplying;
  setIsReplying: React.Dispatch<React.SetStateAction<IsReplying>>;
};

export const ChatUserInput = ({
  sendMessage,
  myMessage,
  setMyMessage,
  isReplying,
  setIsReplying,
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
    <>
      {isReplying.state ? (
        <ReplyPopover isReplying={isReplying} setIsReplying={setIsReplying} />
      ) : null}

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
    </>
  );
};
