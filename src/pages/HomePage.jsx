import { Helmet } from "react-helmet-async";
import Home from "../components/Home/Home";
import '../css/HomePage.css'


export default function HomePage() {
    return(
        <div className="homepage">
            <Helmet>
            <title>Mahadeo irkar</title>
            <meta name="description" content="motivational speaker viva college writer marathi professsor poet" />
            <link rel="canonical" href='https://mahadeoirkar.com/'/>
            </Helmet>
            <Home/>
        </div>
    )
}
