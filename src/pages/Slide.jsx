import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React from 'react';
import Slider from 'react-slick'; // Import the slider component
import sir_image from '../assets/self_image.jpg';
import sir from '../assets/sir.png';
import crop from '../assets/crop.jpg';
import i from '../assets/home.jpg';
import '../css/Home.css';
import AchievementPage from '../components/AchievementPage';
import Experience from '../components/Experience';

export default function Slide() {

    // Settings for react-slick slider
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,          // Speed of slide transition
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,      // Enables auto-slide
        autoplaySpeed: 3000, // Display each slide for 1 second
        swipe: true          // Enables swiping
    };

    return (
        <>
            <div className="home_container">
                <Slider {...settings}>
                    <div className="carousel_item">
                        {/* <img src={i} alt="Slide 1" /> */}
                        <div className="home_content">
                    <h1 data-aos="fade-up">Dr. Mahadeo Dinkar Irkar</h1>
                    <h2 data-aos="fade-up">( BA , B.ED , MA , NET , SET )</h2>
                    <p data-aos="fade-up">
                        "शिक्षक हा समाजाचा शिल्पकार असतो. तो विद्यार्थ्यांना ज्ञान, 
                        कौशल्ये व मूल्ये शिकवतो.शिक्षक आपल्या विद्यार्थ्यांचे भविष्य 
                        घडवण्याचे कार्य करतो. त्यांचे मार्गदर्शन व प्रेरणा विद्यार्थ्यांना 
                        यशस्वी व जबाबदार नागरिक बनवते."
                    </p>
                </div>
                    </div>
                    <Experience/>
                </Slider>
                {/* <div className="home_content">
                    <h1 data-aos="fade-up">Dr. Mahadeo Dinkar Irkar</h1>
                    <h2 data-aos="fade-up">( BA , B.ED , MA , NET , SET )</h2>
                    <p data-aos="fade-up">
                        "शिक्षक हा समाजाचा शिल्पकार असतो. तो विद्यार्थ्यांना ज्ञान, 
                        कौशल्ये व मूल्ये शिकवतो.शिक्षक आपल्या विद्यार्थ्यांचे भविष्य 
                        घडवण्याचे कार्य करतो. त्यांचे मार्गदर्शन व प्रेरणा विद्यार्थ्यांना 
                        यशस्वी व जबाबदार नागरिक बनवते."
                    </p>
                </div> */}
            </div>
            {/* <Experience /> */}
            <AchievementPage/>
        </>
    );
}
