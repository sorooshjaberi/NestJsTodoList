import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Routes from "@/providers/routes.provider";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Routes />
  </React.StrictMode>
);
