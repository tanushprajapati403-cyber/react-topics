import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { ContextProvider } from "./Context/ProductContext.jsx";
import { BrowserRouter } from "react-router";
import { Auth } from "./Context/AuthContext.jsx";
import { AuthContextProvider } from "./Context/AuthContext.jsx";

createRoot(document.getElementById("root")).render(
  <AuthContextProvider>
    <ContextProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ContextProvider>
  </AuthContextProvider>
);
