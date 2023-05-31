import React, { useEffect, useState } from "react";
import { MessageList } from "./components/message-list";
import { ChatHeader } from "./components/chat-header";
import { ChatFooter } from "./components/chat-footer";
import { ChatUserInput } from "./components/chat-user-input";
import { useRef } from "react";
import { connectSocket } from "../../sockets/chat.socket";
import { MessageInfo, Message } from "./Chat.types";
import * as Styles from "./Chat.styles";

const checkIfEmpty = (string: string) => string.replace(/\s+/g, " ").trim();

export const Chat = () => {
  const chatWindowRef = useRef<HTMLDivElement>(null);
  const bottomOfTheChatRef = useRef<HTMLDivElement>(null);
  const [userHasScrolledUp, setUserHasScrolledUp] = useState<boolean>(false);

  const [messages, setMessages] = useState<Message[]>([]);
  const [myMessage, setMyMessage] = useState<string>("");

  const onNewMessage = (messageInfo: MessageInfo) => {
    if (checkIfEmpty(messageInfo.text))
      setMessages((oldMessages: Message[]) => [
        ...oldMessages,
        {
          user: {
            username: messageInfo.user.username,
            color: messageInfo.user.color,
          },
          text: messageInfo.text,
        },
      ]);
  };
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

  // init socket connection on mount
  useEffect(() => {
    const socket = connectSocket();

    // subscribe to new messages
    socket.on("new-message", onNewMessage);

    return () => {
      console.log("closing socket");
      socket.close();
    };
  }, []);

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
          messages={messages}
          myMessage={myMessage}
          setMessages={setMessages}
          setMyMessage={setMyMessage}
        />
        <ChatFooter sendMessage={sendMessage} />
      </Styles.SendMessageContainer>
    </Styles.ChatWindow>
  );
};
