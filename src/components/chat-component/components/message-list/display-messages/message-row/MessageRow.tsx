import * as Styles from "./MessageRow.styles";
import React, { memo } from "react";

type MessageRowProps = {
  user: {
    username: string;
    color: string;
  };
  text: string;
};

export const MessageRow = memo(({ user, text }: MessageRowProps) => {
  return (
    <span>
      <Styles.Username style={{ color: user.color }}>
        {user.username}
      </Styles.Username>
      : &nbsp;
      <Styles.Text>{text}</Styles.Text>
    </span>
  );
});
