import React, { createContext } from "react";
import ReactDOM from "react-dom/client";
import "./styles/index.css";
import App from "./App";
import { DevSupport } from "@react-buddy/ide-toolbox";
import { ComponentPreviews, useInitial } from "./dev";
import UserStore from "./store/UserStore";

const root = ReactDOM.createRoot(document.getElementById("root"));
export const Context = createContext(null);

root.render(
  <Context.Provider
    value={{
      user: new UserStore(),
    }}
  >
    <DevSupport
      ComponentPreviews={ComponentPreviews}
      useInitialHook={useInitial}
    >
      <App />
    </DevSupport>
  </Context.Provider>
);

