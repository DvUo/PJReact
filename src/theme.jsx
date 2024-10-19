import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#081f34",
    },
    secondary: {
      main: "#dc004e",
    },
    buttonLogin: {
      main: "#00AFEA",
    },
  },
  typography: {
    fontFamily: "sans-serif",
  },
});

export default theme;
