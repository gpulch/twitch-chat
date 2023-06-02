import { IsReplying, Message } from "../../../Chat.types";
import { MessageRow } from "./message-row";
import React, { memo } from "react";
import * as Styles from "./DisplayMessages.styles";

type DisplayMessagesProps = {
  messages: Message[];
  setIsReplying: React.Dispatch<React.SetStateAction<IsReplying>>;
};
export const DisplayMessages = memo(
  ({ messages, setIsReplying }: DisplayMessagesProps) => {
    return (
      <ul>
        {messages.map((message: Message, index: number) => {
          return (
            <Styles.Message key={index}>
              <MessageRow
                user={message.user}
                text={message.text}
                setIsReplying={setIsReplying}
              />
            </Styles.Message>
          );
        })}
      </ul>
    );
  }
);
