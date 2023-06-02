import React from "react";
import { Chat } from "./components/chat-component";
import * as Styles from "./App.styles";

export const App = () => {
  return (
    <Styles.Page>
      <Chat />
    </Styles.Page>
  );
};
