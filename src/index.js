import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Global } from "@emotion/react";
import { reset, global } from "./styles/global";
import { AuthProvider } from "./context/auth-context";
import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <Global styles={reset} />
    <Global styles={global} />
    <BrowserRouter>
      <AuthProvider>
        <App />
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
