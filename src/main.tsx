import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "@fontsource/raleway";

import { GlobalStyles } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material";

const globalStyles = (
  <GlobalStyles
    styles={() => ({
      html: {
        margin: "0",
        padding: 0,
      },
      body: {
        margin: 0,
        padding: 0,
        backgroundColor: "#e8e8e8",
        marginLeft: "7rem",
        marginRight: "7rem",
        marginTop: "1rem",
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
