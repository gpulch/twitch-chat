import React, { useEffect, useState } from "react";
import io from "socket.io-client";
import "./styles.css";

const CONNECTION_URL = "wss://api.dev.stories.studio/";
const SOCKET_PATH = "/interview-test";
const SOCKET_TRANSPORTS = ["websocket"];

const App = () => {
  const [messages, setMessages] = useState([]);
  const [myMessage, setMyMessage] = useState([]);

  const chatWindow = document.getElementById("chatWindow");

  const connectSocket = () => {
    const socket = io(CONNECTION_URL, {
      transport: SOCKET_TRANSPORTS,
      path: SOCKET_PATH,
    });

    // onAny subscribes to every events
    socket.onAny((...args) => {
      setMessages([
        ...messages,
        `${args[1].user.username} said : ${args[1].text}`,
        // { text: args[1].text, username: args[1].user.username },
      ]);

      // chatWindow.scrollTop = chatWindow.scrollHeight;
    });

    return socket;
  };

  useEffect(() => {
    if (messages.length > 0) {
      chatWindow.scrollTop = chatWindow.scrollHeight;
    }
  }, [messages]);

  useEffect(() => {
    connectSocket();
  }, []);

  const sendMessage = () => {
    setMessages([...messages, `You said : ${myMessage}`]);
  };

  const handleMessageInput = (event) => {
    setMyMessage(event.target.value);
  };

  return (
    <div className={"container"}>
      <div id={"chatWindow"} className={"messages-list"}>
        {messages.map((message, index) => (
          <ul key={index}>{message}</ul>
        ))}
      </div>
      <div className={"sendMessageContainer"}>
        <input
          className={"myMessageInput"}
          value={myMessage}
          onInput={handleMessageInput}
          placeholder={"Type your message"}
        />
        <button
          className={"sendMessage"}
          id="sendMessage"
          onClick={sendMessage}
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default App;
