import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { CssBaseline, ThemeProvider } from "@mui/material";
import globalTheme from "./theme/globalTheme.js";

createRoot(document.getElementById("root")).render(
  <>
  <ThemeProvider theme={globalTheme}>
    <CssBaseline />
    <App />
    </ThemeProvider>
  </>
);
