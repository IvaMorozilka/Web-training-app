import {BrowserRouter} from "react-router-dom";
import AppRouter from "./components/AppRouter";
import NavBar from "./components/NavBar";
import "./styles/styles.css";
import "./styles/custom-bootstrap.css"
import down from "./assets/hero-bg-down.svg"
import Image from "react-bootstrap/cjs/Image";
import Container from "react-bootstrap/cjs/Container";

function App() {
    return (
        <BrowserRouter>
            <div className = "background vh-100 vw-100 d-flex flex-column justify-content-between">
                <NavBar/>
                <AppRouter/>
                <Container fluid className="px-0 overflow-hidden">
                    <Image src={down} className="w-100 waves" alt="down"/>
                </Container>
            </div>
        </BrowserRouter>
    );
}

export default App;
