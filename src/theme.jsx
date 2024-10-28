import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#081f34",
    },
    secondary: {
      main: "#dc004e",
    },
    button: {
      main: "#113F6A",
      dark: "#081f34",
      light: "#2B88DE",
    },
    card: {
      // main: "#B8D6F5",
      // main: "#D6D6D6",
      main: "#f0f0f0",
      // main: "#e0e0e0",
      light: "#ffffff",
    },
    text: {
      // main: "#ccc",
      main: "#ffffff",
    },
  },
  typography: {
    fontFamily: '"Roboto", sans-serif',
  },
});

export default theme;
