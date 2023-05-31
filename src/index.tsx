import * as React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import { createRoot } from "react-dom/client";
import { GlobalStyle } from "./App.styles";

import { App } from "./App";

const rootElement = document.getElementById("root");
if (!rootElement) throw new Error("Failed to find the root element");
const root = createRoot(rootElement);

root.render(
  <ChakraProvider>
    <GlobalStyle />
    <App />
  </ChakraProvider>
);
