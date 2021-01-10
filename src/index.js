import React from "react";
import Layout from "./layout";
import ReactDOM from "react-dom";

// Context
import { GlobalStateProvider } from "./context/globalContext";

ReactDOM.render(
  <React.StrictMode>
    <GlobalStateProvider>
      <Layout />
    </GlobalStateProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
