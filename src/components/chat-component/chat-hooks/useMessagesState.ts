import { useState, useEffect } from "react";
import { Message, MessageInfo } from "../Chat.types";
import { connectSocket } from "../../../sockets/chat.socket";
import { checkIfEmpty } from "../Chat.utils";

export const useMessagesState = () => {
  const [messages, setMessages] = useState<Message[]>([]);

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

  return [messages, setMessages] as const;
};
