import React from "react";
import * as Styles from "./ReplyPopover.styles";
import { IsReplying } from "../../../Chat.types";

type ReplyPopoverProps = {
  isReplying: IsReplying;
  setIsReplying: React.Dispatch<React.SetStateAction<IsReplying>>;
};
export const ReplyPopover = ({
  isReplying,
  setIsReplying,
}: ReplyPopoverProps) => {
  const handleClick = () => {
    setIsReplying({ state: false, replyToUsername: "" });
  };
  return (
    <>
      Réponse à @{isReplying.replyToUsername}
      <Styles.CancelReply onClick={handleClick}>X</Styles.CancelReply>
    </>
  );
};
