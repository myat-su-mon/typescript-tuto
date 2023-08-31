import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App5";
import { StateContextProvider } from "./context/StateContext3";
import "./App.css";
import { Provider } from "react-redux";
import { store } from "./redux/store";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    {/* <StateContextProvider>
      <App />
    </StateContextProvider> */}
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
