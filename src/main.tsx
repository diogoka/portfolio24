import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "@fontsource/raleway";
import "@fontsource/raleway/900.css";
import "@fontsource/raleway/700.css";
import "@fontsource/raleway/600.css";
import "@fontsource/raleway/500.css";
import "@fontsource/raleway/600.css";

import { GlobalStyles } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material";

const globalStyles = (
  <GlobalStyles
    styles={() => ({
      html: {
        margin: 0,
        padding: 0,
      },
      body: {
        margin: 0,
        padding: 0,
        backgroundColor: "#F0F0F0",
        color: "#2d2e32",
        fontFamily: "Raleway, sans-serif",
        width: "100vw",
      },
    })}
  />
);

const theme = createTheme({
  typography: {
    fontFamily: "Raleway, sans-serif",
  },
});

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      {globalStyles}
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
