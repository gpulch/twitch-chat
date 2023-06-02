import React from "react";
import * as Styles from "./ChatHeader.styles";
import arrow from "../../../../icons/arrow.png";
import user from "../../../../icons/user.png";

type ChatHeaderProps = {
  title: string;
};
export const ChatHeader = ({ title }: ChatHeaderProps) => {
  return (
    <Styles.ChatHeaderContainer>
      <img src={arrow} alt="arrow" />
      {title}
      <img src={user} alt="user" />
    </Styles.ChatHeaderContainer>
  );
};
