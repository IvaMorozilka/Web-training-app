import { createTheme, ThemeOptions } from "@mui/material/styles";

const themeOptions: ThemeOptions = {
  palette: {
    mode: "light",
    primary: {
      main: "#7E57C2",
    },
    secondary: {
      main: "#D81B60",
    },
    background: {
      default: "#fff",
      paper: "#fff",
    },
  },
  typography: {
    fontFamily: "Montserrat, sans-serif",
  },
  spacing: 8,
};

export const customTheme = createTheme(themeOptions);