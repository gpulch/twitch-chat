import React from "react";
import io from "socket.io-client";
import "./styles.css";

const CONNECTION_URL = "wss://api.dev.stories.studio/";
const SOCKET_PATH = "/interview-test";
const SOCKET_TRANSPORTS = ["websocket"];

const connectSocket = () => {
  const socket = io(CONNECTION_URL, {
    transport: SOCKET_TRANSPORTS,
    path: SOCKET_PATH
  });
  // onAny subscribes to every events
  socket.onAny((...args) => {
    console.log(...args);
  });

  return socket;
};

const App = () => {
  return <div>JOIN Interview </div>;
};

export default App;
