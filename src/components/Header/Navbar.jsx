import { useState } from "react";
import "../../css/Navbar.css";
import { useNavigate } from 'react-router-dom';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const navigate = useNavigate();

    const toggleMenu = () => {
        const close = document.getElementById("close");
        close.style.display = "block";
        document.getElementsByClassName("navbar")[0].style.height = "100vh";
        setIsOpen(!isOpen);
    };

    const toggleMenu2 = () => {
        setIsOpen(false);
        const close = document.getElementById("close");
        document.getElementsByClassName("navbar")[0].style.height = "";
        close.style.display = "none";
    };

    const handleNavItemClick = (slug) => {
        navigate(slug);
        toggleMenu2();  
    };

    const navItems = [
        {
            name: 'Home',
            slug: "/",
        },
        {
            name: "Recent Activity",
            slug: "/recentactivity",
        },
        {
            name: "Lekh",
            slug: "/lekh",
        },
        {
            name: "Gallery",
            slug : "/gallery",
        },
        {
            name: "Contact",
            slug: "/contact",
        },
    ];

    return (
        <div className="navbar">
            <h1>Dr. Mahadeo Irkar</h1>
            <div className={`navItems ${isOpen ? "open" : ""}`}>
                <ul>
                    {
                        navItems.map((item) => (
                            <li key={item.name}>
                                <button className="btn"
                                    onClick={() => handleNavItemClick(item.slug)}
                                >{item.name}</button>
                            </li>
                        ))
                    }
                </ul>
            </div>
            <div className="hamburger" onClick={toggleMenu}>
                <span className="bar"></span>
                <span className="bar"></span>
                <span className="bar"></span>
            </div>
            <div id="close" className="closebutton" onClick={toggleMenu2}>
                <p>X</p>
            </div>
        </div>
    );
}
