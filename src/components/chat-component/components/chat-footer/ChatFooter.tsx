import React from "react";
import * as Styles from "./ChatFooter.styles";
import diams from "../../../../icons/diams.png";
import settings from "../../../../icons/settings.png";

type ChatFooterProps = {
  sendMessage: () => void;
};
export const ChatFooter = ({ sendMessage }: ChatFooterProps) => {
  return (
    <Styles.ChatFooterContainer>
      <Styles.ChatFooterIcons>
        <img src={diams} alt="diams" />
        <img src={settings} alt="settings" />
      </Styles.ChatFooterIcons>

      <Styles.SendMessageButton id="sendMessage" onClick={sendMessage}>
        Chat
      </Styles.SendMessageButton>
    </Styles.ChatFooterContainer>
  );
};
