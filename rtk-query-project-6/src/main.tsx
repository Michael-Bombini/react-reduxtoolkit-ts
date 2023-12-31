import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { ApiProvider } from "@reduxjs/toolkit/dist/query/react";
import { apiSlice } from "./api/apiSlice.ts";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    {/* Funziona proprio come il provider dello store */}
    <ApiProvider api={apiSlice}>
      <App />
    </ApiProvider>
  </React.StrictMode>
);
