import { BrowserRouter } from "react-router-dom";
import AppRouter from "./components/AppRouter";
import NavBar from "./components/NavBar";
import "./styles/styles.css";
import {Box, ThemeProvider} from "@mui/material";
import { customTheme } from "./mui/custom-theme";
import BackgroundWrapper from "./components/BackgroundWrapper";
import Footer from "./components/Footer";

function App() {
  return (
    <ThemeProvider theme={customTheme}>
      <BackgroundWrapper>
        <BrowserRouter>
          <NavBar />
            <AppRouter />
          <Footer />
        </BrowserRouter>
      </BackgroundWrapper>
    </ThemeProvider>
  );
}

export default App;
