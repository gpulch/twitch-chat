import io from "socket.io-client";

const CONNECTION_URL: string = "wss://api.dev.stories.studio/";
const SOCKET_PATH: string = "/interview-test";
const SOCKET_TRANSPORTS: string[] = ["websocket"];

export const connectSocket = () => {
  console.log("connecting socket");
  const socket = io(CONNECTION_URL, {
    // @ts-expect-error
    transport: SOCKET_TRANSPORTS,
    path: SOCKET_PATH,
  });

  return socket;
};
