import React, { useEffect, useState } from "react";
import io from "socket.io-client";
import { socket } from "./socket";
import { Chat } from "./components/Chat";

import "./styles.css";

const App = () => {
  const [messages, setMessages] = useState([]);
  const [myMessage, setMyMessage] = useState([]);

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
    if (messages.length > 0) {
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

export default App;
