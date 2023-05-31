import * as Styles from "./MessageRow.styles";
import React from "react";
import { Message } from "../../../../Chat.types";

type MessageRowProps = {
  message: Message;
};

export const MessageRow = ({ message }: MessageRowProps) => {
  console.log("render message row");
  return (
    <span>
      <Styles.Username style={{ color: message.user.color }}>
        {message.user.username}
      </Styles.Username>
      : &nbsp;
      <Styles.Text>{message.text}</Styles.Text>
    </span>
  );
};

//memo
