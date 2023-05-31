import React, { useEffect, useRef, useState } from "react";
import { MessageList } from "./components/message-list";
import { ChatHeader } from "./components/chat-header";
import { ChatFooter } from "./components/chat-footer";
import { ChatUserInput } from "./components/chat-user-input";
import * as Styles from "./Chat.styles";
import { useMessagesState } from "./chat-hooks/useMessagesState";
import { checkIfEmpty } from "./Chat.utils";

export const Chat = () => {
  const [myMessage, setMyMessage] = useState<string>("");
  const chatWindowRef = useRef<HTMLDivElement>(null);
  const bottomOfTheChatRef = useRef<HTMLDivElement>(null);
  const [userHasScrolledUp, setUserHasScrolledUp] = useState<boolean>(false);

  const [messages, setMessages] = useMessagesState();

  const sendMessage = () => {
    if (checkIfEmpty(myMessage)) {
      setMessages([
        ...messages,
        {
          user: {
            username: "You",
            color: "#" + Math.floor(Math.random() * 16777215).toString(16),
          },
          text: myMessage,
        },
      ]);

      setMyMessage("");
      bottomOfTheChatRef.current?.scrollIntoView({
        behavior: "auto",
        block: "end",
      });
    }
  };

  // auto scroll-down on new message
  useEffect(() => {
    if (messages.length > 0 && bottomOfTheChatRef.current) {
      if (!userHasScrolledUp) {
        bottomOfTheChatRef.current.scrollIntoView({
          behavior: "smooth",
          block: "end",
        });
      }
    }
  }, [messages]);

  return (
    <Styles.ChatWindow>
      <ChatHeader title={"CHAT DU STREAM"} />
      <MessageList
        messages={messages}
        userHasScrolledUp={userHasScrolledUp}
        setUserHasScrolledUp={setUserHasScrolledUp}
        bottomOfTheChatRef={bottomOfTheChatRef}
        chatWindowRef={chatWindowRef}
      />

      <Styles.SendMessageContainer>
        <ChatUserInput
          sendMessage={sendMessage}
          myMessage={myMessage}
          setMyMessage={setMyMessage}
        />
        <ChatFooter sendMessage={sendMessage} />
      </Styles.SendMessageContainer>
    </Styles.ChatWindow>
  );
};
