// import Logo from "../Logo";
// import '../../css/Navbar.css'

// export default function Navbar(){
//     return(
//         <div className="navbar">
//             <Logo/>
//             <div className="navItems">
//                 <ul>
//                     <li>Home</li>
//                     <li>Recent Activity</li>
//                     <li>Lekh</li>
//                     <li>Contact</li>
//                 </ul>
//             </div>
//         </div>
//     )
// }
// import { useState } from "react";
// import Logo from "../Logo";
// import "../../css/Navbar.css";
// import { Link } from 'react-router-dom'
// import { useNavigate } from 'react-router-dom'

// export default function Navbar() {
//     const [isOpen, setIsOpen] = useState(false);

//     const navigate = useNavigate()

//     const toggleMenu = () => {
//         const close = document.getElementById("close")
//         close.style.display="block"
//         // if(close.style.display="block"){
//         //     close.style.display="none"
//         // }
//         // if(close.style.display="none"){
//         //     close.style.display="block"
//         // }
//         setIsOpen(!isOpen);
//     };
//     const toggleMenu2 = () =>{
//         setIsOpen(false);
//         const close = document.getElementById("close")
//         close.style.display="none"
//     }
//     const navItems = [
//         {
//           name: 'Home',
//           slug: "/",
//         }, 
//         {
//           name: "Recent Activity",
//           slug: "/recentactivity",
//         },
//         {
//           name: "Lekh",
//           slug: "/lekh",
//         },
//         {
//           name: "Contact",
//           slug: "/contact",
//         },
//       ]

//     return (
//         <div className="navbar">
//             <Logo />
//             <div className={`navItems ${isOpen ? "open" : ""}`}>
//                 <ul>
//                     {
//                         navItems.map((item)=>(
//                            <li key={item.name}>
//                                 <button className="btn"
//                                     onClick={() => {
//                                         navigate(item.slug);
//                                       }}
//                                 >{item.name}</button>
//                            </li> 
//                         ))
//                     }
//                 </ul>
//                 {/* <ul>
//                     <li>Home</li>
//                     <li>Recent Activity</li>
//                     <li>Lekh</li>
//                     <li>Contact</li>
//                 </ul> */}
//             </div>
//             <div className="hamburger" onClick={toggleMenu}>
//                 <span className="bar"></span>
//                 <span className="bar"></span>
//                 <span className="bar"></span>
//             </div>
//             <div id="close" className="closebutton" onClick={toggleMenu2}>
//                 <p>X</p>
//             </div>
//         </div>
//     );
// }
import { useState } from "react";
import Logo from "../Logo";
import "../../css/Navbar.css";
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const navigate = useNavigate();

    const toggleMenu = () => {
        const close = document.getElementById("close");
        close.style.display = "block";
        // document.getElementsByClassName("lekh_image")[0].style.position = "relative";
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
        toggleMenu2();  // Close the menu when a nav item is clicked
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
            {/* <Logo /> */}
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
