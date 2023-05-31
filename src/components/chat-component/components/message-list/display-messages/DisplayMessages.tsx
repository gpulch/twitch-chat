import { Message } from "../../../Chat.types";
import { MessageRow } from "./message-row";
import React from "react";

type DisplayMessagesProps = {
  messages: Message[];
};
export const DisplayMessages = ({ messages }: DisplayMessagesProps) => {
  console.log("render display message");
  return (
    <ul>
      {messages.map((message: Message, index: number) => {
        return (
          <li key={index}>
            <MessageRow message={message} />
          </li>
        );
      })}
    </ul>
  );
};
