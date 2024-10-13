// import '../css/Experience.css'
// import expimg from '../assets/self_image.jpg'

// export default function Experience(){
//     return(
//         <div className="experience_container" data-aos="fade-up">
//             <h1>Experience</h1>
//             <div className="exp_info" >
//                 <div className="exp_img"data-aos="fade-up-right">
//                     <img src={expimg} alt="" />
//                 </div>
//                 <div className="exp_content" data-aos="">
//                     <p>
//                         Lorem ipsum dolor sit amet consectetur adipisicing elit.
//                         Inventore aliquam dolores nam corporis a cupiditate est minima maxime quia. 
//                         Voluptate, delectus sunt repellat nemo asperiores assumenda eaque laborum.
//                     </p>
//                     <div className="counts">
//                         <div className="eachcount">
//                             <h1>122</h1>
//                             <h2>Clients</h2>
//                         </div>
//                         <div className="eachcount">
//                             <h1>602</h1>
//                             <h2>Projects</h2>
//                         </div>
//                         <div className="eachcount">
//                             <h1>300</h1>
//                             <h2>Seminar</h2>
//                         </div>
//                         <div className="eachcount">
//                             <h1>122</h1>
//                             <h2>Clients</h2>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     )
// }
import React, { useEffect, useState } from 'react';
import '../css/Experience.css';
import expimg from '../assets/exp_image.jpg';
// import expimg from '../assets/self_image.jpg';
// import expimg from '../assets/self_image.jpg';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { CountUp } from 'countup.js';

export default function Experience() {
    const [hasCounted, setHasCounted] = useState(false); // State to check if counting has occurred

    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: true, // AOS animations will happen only once
        });
    }, []);

    useEffect(() => {
        const handleScroll = () => {
            const experienceSection = document.querySelector('.counts');
            const sectionPosition = experienceSection.getBoundingClientRect().top;
            const screenPosition = window.innerHeight;
    
            // Check if the section is in view and if counting hasn't been done yet
            if (sectionPosition < screenPosition && !hasCounted) {
                const options = { duration: 5 }; // Increase duration to slow down the count (5 seconds)
                new CountUp('clientsCount', 122, options).start();
                new CountUp('projectsCount', 602, options).start();
                new CountUp('projects', 601, options).start();
                new CountUp('seminarsCount', 300, options).start();
    
                // Set the flag to true so counting only happens once
                setHasCounted(true);
            }
        };
    
        window.addEventListener('scroll', handleScroll);
    
        return () => window.removeEventListener('scroll', handleScroll);
    }, [hasCounted]); // Add hasCounted as a dependency
    

    return (
        <div className="experience_container">
            <div className="top_experience">
                <h1>Experience</h1>
            </div>
            <div className="exp_info">
                <div className="exp_img" data-aos="fade-up-right">
                    <img src={expimg} alt="" />
                </div>
                <div className="exp_content">
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Inventore aliquam dolores nam corporis a cupiditate est minima maxime quia. 
                        Voluptate, delectus sunt repellat nemo asperiores assumenda eaque laborum.
                    </p>
                    <div className="counts">
                        <div className="eachcount">
                            <h1 id="clientsCount">0</h1>
                            <h2>Clients</h2>
                        </div>
                        <div className="eachcount">
                            <h1 id="projectsCount">0</h1>
                            <h2>Projects</h2>
                        </div>
                        <div className="eachcount">
                            <h1 id="projects">0</h1>
                            <h2>Projects</h2>
                        </div>
                        <div className="eachcount">
                            <h1 id="seminarsCount">0</h1>
                            <h2>Seminars</h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
