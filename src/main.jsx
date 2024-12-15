
import { createRoot } from "react-dom/client";
import { App } from "./App.jsx";
import { CssBaseline, ThemeProvider } from "@mui/material";
import theme from "./theme.jsx";
import ScrollToTop from "./components/ScrollToTop.jsx";
import { BrowserRouter } from "react-router-dom";

createRoot(document.getElementById("root")).render(

    <BrowserRouter>
      <ScrollToTop />
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <App />
      </ThemeProvider>
   </BrowserRouter>
  
);
