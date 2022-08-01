import React from "react";
import ReactDOM from "react-dom";
import { ChakraProvider, ColorModeScript, extendTheme } from "@chakra-ui/react";

import App from "./App";

const config = {
  initialColorMode: "system",
  useSystemColorMode: false,
};

const theme = extendTheme({
  config,
});

ReactDOM.render(
  <React.StrictMode>
    <ChakraProvider>
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />
      <App />
    </ChakraProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
