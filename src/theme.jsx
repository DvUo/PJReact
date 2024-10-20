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
      main: "#2B88DE",
      dark: "#113F6A",
    },
    card: {
      main: "#B8D6F5",
    },
  },
  typography: {
    fontFamily: "sans-serif",
  },
});

export default theme;
