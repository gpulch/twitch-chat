import io from "socket.io-client";

const CONNECTION_URL = "wss://api.dev.stories.studio/";
const SOCKET_PATH = "/interview-test";
const SOCKET_TRANSPORTS = ["websocket"];

export const socket = io(CONNECTION_URL, {
  transport: SOCKET_TRANSPORTS,
  path: SOCKET_PATH,
});
