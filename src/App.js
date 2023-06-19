import { BrowserRouter } from "react-router-dom";
import AppRouter from "./components/AppRouter";
import "./styles/styles.css";
import {ThemeProvider} from "@mui/material";
import { customTheme } from "./mui/custom-theme";
import BackgroundWrapper from "./components/BackgroundWrapper";
import Footer from "./components/Footer";
import ResponsiveNavBar from "./components/ResponsiveNavBar";
import {useContext, useEffect} from "react";
import {Context} from "./index";

function App() {
    const {trading} = useContext(Context);
    useEffect(( ) => {
        async function createTradingAccounts(){
            await trading.updateMarketData();
            trading.createTradingAccounts();
        }
        createTradingAccounts();
    }, [])
  return (
    <ThemeProvider theme={customTheme}>
      <BackgroundWrapper>
        <BrowserRouter>
          <ResponsiveNavBar/>
            <AppRouter />
          <Footer />
        </BrowserRouter>
      </BackgroundWrapper>
    </ThemeProvider>
  );
}

export default App;
