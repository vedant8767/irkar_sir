import { Helmet } from "react-helmet-async";
import Navbar from "../components/Header/Navbar";
import Home from "../components/Home/Home";
import '../css/HomePage.css'
import Slide from "./Slide";

export default function HomePage() {
    return(
        <div className="homepage">
            <Helmet>
            <title>Mahadeo irkar</title>
            <meta name="description" content="motivational speaker viva college writer marathi professsor poet" />
            <link rel="canonical" href='https://irkar-sir.vercel.app/'/>
            </Helmet>
            {/* <Navbar/> */}
            <Home/>
            {/* <Slide/> */}
        </div>
    )
}
