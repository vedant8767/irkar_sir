import Navbar from "../components/Header/Navbar";
import Home from "../components/Home/Home";
import '../css/HomePage.css'
import Slide from "./Slide";

export default function HomePage() {
    return(
        <div className="homepage">
            {/* <Navbar/> */}
            <Home/>
            {/* <Slide/> */}
        </div>
    )
}
