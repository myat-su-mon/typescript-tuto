import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App4";
import { StateContextProvider } from "./context/StateContext";
import "./App.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <StateContextProvider>
      <App />
    </StateContextProvider>
  </React.StrictMode>
);
