import React, { useEffect, useRef, useState } from "react";
import { MessageList } from "./components/message-list";
import { ChatHeader } from "./components/chat-header";
import { ChatFooter } from "./components/chat-footer";
import { ChatUserInput } from "./components/chat-user-input";
import * as Styles from "./Chat.styles";
import { useMessagesState } from "./chat-hooks/useMessagesState";
import { checkIfEmpty } from "./Chat.utils";
import { IsReplying } from "./Chat.types";

export const Chat = () => {
  const [myMessage, setMyMessage] = useState<string>("");
  const chatWindowRef = useRef<HTMLDivElement>(null);
  const bottomOfTheChatRef = useRef<HTMLDivElement>(null);
  const [userHasScrolledUp, setUserHasScrolledUp] = useState<boolean>(false);
  const [isReplying, setIsReplying] = useState<IsReplying>({
    state: false,
    replyTo: { username: "", text: "" },
  });

  const [messages, setMessages] = useMessagesState();

  const sendMessage = () => {
    if (checkIfEmpty(myMessage)) {
      if (!isReplying.state) {
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
      } else {
        setMessages([
          ...messages,
          {
            user: {
              username: "You",
              color: "#" + Math.floor(Math.random() * 16777215).toString(16),
            },
            text: ` Replying to ${
              isReplying.replyTo.username
            }'s chat : "${isReplying.replyTo.text.substring(
              0,
              30
            )}"... You: ${myMessage}`,
          },
        ]);
      }

      if (!isReplying.state) {
        setMyMessage("");
      } else {
        setMyMessage("");
        setIsReplying({
          state: false,
          replyTo: {
            username: "",
            text: "",
          },
        });
      }
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
        isReplying={isReplying}
        setIsReplying={setIsReplying}
      />

      <Styles.SendMessageContainer>
        <ChatUserInput
          sendMessage={sendMessage}
          myMessage={myMessage}
          setMyMessage={setMyMessage}
          isReplying={isReplying}
          setIsReplying={setIsReplying}
        />
        <ChatFooter sendMessage={sendMessage} />
      </Styles.SendMessageContainer>
    </Styles.ChatWindow>
  );
};
