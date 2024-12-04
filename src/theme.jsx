import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#081f34",
    },

    button: {
      main: "#113F6A",
      dark: "#081f34",
      light: "#2B88DE",
    },
    card: {

      main: "#f0f0f0",

      light: "#ffffff",
    },
    text: {
      main: "#eeeeee",
    },
  },
  typography: {
    fontFamily: '"Roboto", sans-serif',
  },
});

export default theme;
