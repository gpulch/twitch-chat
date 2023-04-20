import React, { useEffect, useState } from "react";
import { MessageList } from "./components/message-list";
import { ChatHeader } from "./components/chat-header";
import { ChatFooter } from "./components/chat-footer";
import { ChatUserInput } from "./components/chat-user-input";
import { useRef } from "react";
import { connectSocket } from "../../socket";
import { MessageInfo, Message } from "./Chat.types";
import * as Styles from "./Chat.styles";

export const Chat = () => {
  const chatWindowRef = useRef<HTMLDivElement>(null);
  const bottomOfTheChatRef = useRef<HTMLDivElement>(null);
  const [userHasScrolledUp, setUserHasScrolledUp] = useState<boolean>(false);

  const [messages, setMessages] = useState<Message[]>([]);
  const [myMessage, setMyMessage] = useState<string>("");

  const onNewMessage = (messageInfo: MessageInfo) => {
    setMessages((oldMessages: Message[]) => [
      ...oldMessages,
      { username: messageInfo.user.username, text: messageInfo.text },
    ]);
  };
  const sendMessage = () => {
    setMessages([...messages, { username: "You", text: myMessage }]);
    setMyMessage("");
    bottomOfTheChatRef.current?.scrollIntoView({
      behavior: "auto",
      block: "end",
    });
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
