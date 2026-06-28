import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { MusicContextProvider } from "./Context/SongContextProvider.jsx";
import { BrowserRouter } from "react-router";
import { SongDataContextProvider } from "./Context/SongData.jsx";

createRoot(document.getElementById("root")).render(
  <SongDataContextProvider>
    <MusicContextProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </MusicContextProvider>
  </SongDataContextProvider>,
);
