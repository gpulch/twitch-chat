import React from "react";
import * as Styles from "./ReplyPopover.styles";
import { IsReplying } from "../../../Chat.types";
import replyArrow from "../../../../../icons/replyArrow.png";

type ReplyPopoverProps = {
  isReplying: IsReplying;
  setIsReplying: React.Dispatch<React.SetStateAction<IsReplying>>;
};
export const ReplyPopover = ({
  isReplying,
  setIsReplying,
}: ReplyPopoverProps) => {
  const handleClick = () => {
    setIsReplying({ state: false, replyTo: { username: "", text: "" } });
  };
  return (
    <Styles.ReplyPopover>
      <Styles.ReplyPopoverHeader>
        <img src={replyArrow} /> Réponse à @{isReplying.replyTo.username}
        &nbsp;
        <Styles.CancelReply onClick={handleClick}>X</Styles.CancelReply>
      </Styles.ReplyPopoverHeader>
      <Styles.ReplyToText>
        {isReplying.replyTo.username} : {isReplying.replyTo.text}
      </Styles.ReplyToText>
    </Styles.ReplyPopover>
  );
};
