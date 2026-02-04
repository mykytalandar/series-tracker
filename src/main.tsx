import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import { SeriesProvider } from "./context/SeriesContext.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <SeriesProvider>
      <App />
    </SeriesProvider>
  </StrictMode>,
);
