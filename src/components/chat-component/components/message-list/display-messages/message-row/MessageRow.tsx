import * as Styles from "./MessageRow.styles";
import React, { memo } from "react";
import replyArrow from "./../../../../../../icons/replyArrow.png";
import { IsReplying } from "../../../../Chat.types";

type MessageRowProps = {
  user: {
    username: string;
    color: string;
  };
  text: string;
  isReplying: IsReplying;
  setIsReplying: React.Dispatch<React.SetStateAction<IsReplying>>;
};

export const MessageRow = memo(
  ({ user, text, isReplying, setIsReplying }: MessageRowProps) => {
    const handleClick = () => {
      setIsReplying({
        state: true,
        replyTo: { username: user.username, text: text },
      });

      document.getElementById("myMessageInput")?.focus();
    };
    return (
      <Styles.Message>
        <Styles.ReplyArrow src={replyArrow} onClick={handleClick} />
        <Styles.Username style={{ color: user.color }}>
          {user.username}
        </Styles.Username>
        : &nbsp;
        <Styles.Text>{text}</Styles.Text>
      </Styles.Message>
    );
  }
);
