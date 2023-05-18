import { BrowserRouter } from "react-router-dom";
import AppRouter from "./components/AppRouter";
import NavBar from "./components/NavBar";
import "./styles/styles.css";
import down from "./assets/hero-bg-down.svg";

import { Box, Grid, ThemeProvider } from "@mui/material";
import { customTheme } from "./mui/custom-theme";

function App() {
  return (
    <ThemeProvider theme={customTheme}>
      <BrowserRouter>
        <Box
          sx={{
            background:
              "radial-gradient(circle, #002c6a, #002458, #001b47, #011337, #000627)",
            width: "100vw",
            height: "100vh",
            overflow: "auto",
          }}
        >
          <NavBar mb = '75px'/>
          <Box
            height="100%"
            width="100%"
            display="flex"
            justifyContent="space-around"
            flexDirection="column"
          >
            <AppRouter />
            <Box
              className="footer-background"
              sx={{ width: "100%", height: "400px", marginTop: 'auto'}}
            />
          </Box>
        </Box>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
