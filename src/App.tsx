import React from "react";
import { Chat } from "./components/chat-component";
import "./index.css";
import { Page } from "./styles";

export const App = () => {
  return (
    <Page>
      <Chat />
    </Page>
  );
};
