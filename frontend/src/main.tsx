import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { MantineProvider, MantineThemeOverride } from "@mantine/core";
import App from "./App";
import "./index.css";

// Theme configuration (optional)
const theme: MantineThemeOverride = {
  fontFamily: "Inter, sans-serif",
  primaryColor: "indigo",
  defaultRadius: "md",
};

createRoot(document.getElementById("root") as HTMLElement).render(
  <StrictMode>
    <MantineProvider theme={theme} defaultColorScheme="light">
      <App />
    </MantineProvider>
  </StrictMode>
);
