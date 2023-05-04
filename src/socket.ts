import io from "socket.io-client";

const CONNECTION_URL: string = "wss://api.dev.stories.studio/";
const SOCKET_PATH: string = "/interview-test";
const SOCKET_TRANSPORTS: string[] = ["websocket"];

export const socket = io(CONNECTION_URL, {
  // @ts-ignore
  transport: SOCKET_TRANSPORTS, // transport = app works but error / transports corrects error but no more messages
  path: SOCKET_PATH,
});
