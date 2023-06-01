import { IsReplying, Message } from "../../../Chat.types";
import { MessageRow } from "./message-row";
import React, { memo } from "react";
import * as Styles from "./DisplayMessages.styles";

type DisplayMessagesProps = {
  messages: Message[];
  isReplying: IsReplying;
  setIsReplying: React.Dispatch<React.SetStateAction<IsReplying>>;
};
export const DisplayMessages = memo(
  ({ messages, setIsReplying, isReplying }: DisplayMessagesProps) => {
    return (
      <ul>
        {messages.map((message: Message, index: number) => {
          return (
            <Styles.Message key={index}>
              <MessageRow
                user={message.user}
                text={message.text}
                isReplying={isReplying}
                setIsReplying={setIsReplying}
              />
            </Styles.Message>
          );
        })}
      </ul>
    );
  }
);
