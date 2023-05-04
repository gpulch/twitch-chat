import React, { useEffect, useState } from "react";
import { socket } from "./socket";
import { Chat } from "./components/Chat";

import "./styles.css";

export const App = () => {
  const [messages, setMessages] = useState<string[]>([]);
  const [myMessage, setMyMessage] = useState<string[]>([]);

  const chatWindow = document.getElementById("chatWindow");

  const connectSocket = () => {
    // onAny subscribes to every event
    socket.onAny((...args) => {
      setMessages([
        ...messages,
        `${args[1].user.username} said : ${args[1].text}`,
      ]);
    });

    return socket;
  };

  useEffect(() => {
    if (messages.length > 0 && chatWindow) {
      chatWindow.scrollTop = chatWindow.scrollHeight;
    }
  }, [messages]);

  connectSocket();

  return (
    <>
      <Chat
        messages={messages}
        setMessages={setMessages}
        myMessage={myMessage}
        setMyMessage={setMyMessage}
      />
    </>
  );
};
