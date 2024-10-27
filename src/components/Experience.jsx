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
                <h1>EXPERIENCE</h1>
            </div>
            <div className="exp_top_delow">
                <h2>महादेव   इरकर
                </h2>
            </div>
            <div className="exp_content">
            <div className="scrollable-box">
    <p>
        1. राष्ट्रीय माध्यमिक शिक्षा अभियान - शिक्षक प्रशिक्षण - यशदा (मानव विकास केंद्र) पुणे- ०८/०४/२०११ ते १२/०४/२०११ <br/>
        2. आरोग्य व शारीरिक शिक्षण व व्यक्तिमत्व विकास - जिल्हा परिषद, ठाणे <br/>
        3. पर्यावरण व नवोपक्रम शिक्षण प्रशिक्षण कार्यक्रम - महाराष्ट्र राज्य प्रकल्प संचालक, मुंबई  <br/>
        4. माध्यमिक शिक्षण उद्धोधन कार्यक्रम २०१८-१९ , टप्पा २ - जिल्हा शैक्षणिक सातत्यपूर्ण व्यावसायिक विकास संस्था २८/०१/२०१९ ते ०२/०२/२०१९ - तज्ञ मार्गदर्शक <br/>
        5. National initiative for School Head's and Teacher's Holistic advancement (NISHITHA) - MSCERT, PUNE आयोजित निष्ठा तालुकास्तर प्रशिक्षण कार्यक्रम २०२० -  तज्ञ मार्गदर्शक <br/>
        6. तालुकास्तरीय इ. ६ वी  पुर्नरचित अभ्यासक्रम शिक्षण प्रशिक्षण कार्यक्रम, महाराष्ट्र राज्य शिक्षण परिषद, मुंबई - २००७-०८, २१ दिवस <br/>
        7. तज्ञ मार्गदर्शक - राज्यस्तर - आपत्ती व्यवस्थापन प्रशिक्षण - यशदा, पुणे <br/>
        8. तज्ञ मार्गदर्शक - राज्यस्तर - आपत्ती व्यवस्थापन प्रशिक्षण - शालेय शिक्षण व क्रीडा विभाग, महाराष्ट्र शासन <br/>
        9. तज्ञ मार्गदर्शक - शालेय स्पर्धा परीक्षा <br/>
        10. तज्ञ मार्गदर्शक - राज्यस्तर - शाळा सुरक्षा व आपत्ती व्यवस्थापन प्रशिक्षण - शालेय शिक्षण व क्रीडा विभाग, महाराष्ट्र शासन <br/>
    </p>
</div>
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
            {/* <div className="top_experience">
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
            </div> */}
        </div>
    );
}
