import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import './styles/fonts.css'
import './styles/variables.css'
import { SeriesProvider } from "./context/SeriesProvider.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <SeriesProvider>
      <App />
    </SeriesProvider>
  </StrictMode>,
);
