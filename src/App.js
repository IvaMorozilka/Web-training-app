import {BrowserRouter} from "react-router-dom";
import AppRouter from "./components/AppRouter";
import NavBar from "./components/NavBar";
import "./styles/styles.css";
import "./styles/custom-bootstrap.css"
import down from "./assets/hero-bg-down.svg"
import Image from "react-bootstrap/cjs/Image";

function App() {
    return (
        <BrowserRouter>
            <div className = "background vh-100 vw-100 d-flex flex-column justify-content-between">
                <NavBar/>
                <AppRouter/>
                <Image src={down} className="img-fluid" alt="down"/>
            </div>
        </BrowserRouter>
    );
}

export default App;
