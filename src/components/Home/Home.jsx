// import sir_image from '../../assets/self_image.jpg'
// import sir from '../../assets/sir.png'
// import s from '../../assets/s.png'
// import crop from '../../assets/crop.jpg'
// import i from  '../../assets/home.jpg'
// import '../../css/Home.css'
// import AchievementPage from '../AchievementPage'
// import Experience from '../Experience'

// export default function Home() {
//     return(
//         <>
//             <div className="home_container">
//                 {/* <img src={i} alt="" srcset="" /> */}
//             <div className="home_content">
//                     <h1 data-aos="fade-up">Dr. Mahadeo Dinkar Irkar</h1>
//                     <h2 data-aos="fade-up">( BA , B.ED , MA , NET , SET )</h2>
//                     <p data-aos="fade-up">
//                         "शिक्षक हा समाजाचा शिल्पकार असतो. तो विद्यार्थ्यांना ज्ञान, 
//                         कौशल्ये व मूल्ये शिकवतो.शिक्षक आपल्या विद्यार्थ्यांचे भविष्य 
//                         घडवण्याचे कार्य करतो. त्यांचे मार्गदर्शन व प्रेरणा विद्यार्थ्यांना 
//                         यशस्वी व जबाबदार नागरिक बनवते."
//                     </p>
//                     </div>
//                 {/* <div className="home_left" data-aos="fade-up-right">
//                     <div className="home_content">
//                     <h1 data-aos="">Dr. Mahadeo Dinkar Irkar</h1>
//                     <h2 data-aos="">( BA , B.ED , MA , NET , SET )</h2>
//                     <p data-aos="">
//                         "शिक्षक हा समाजाचा शिल्पकार असतो. तो विद्यार्थ्यांना ज्ञान, 
//                         कौशल्ये व मूल्ये शिकवतो.शिक्षक आपल्या विद्यार्थ्यांचे भविष्य 
//                         घडवण्याचे कार्य करतो. त्यांचे मार्गदर्शन व प्रेरणा विद्यार्थ्यांना 
//                         यशस्वी व जबाबदार नागरिक बनवते."
//                     </p>
//                     </div>
//                 </div>
//                 <div className="home_right"  data-aos="fade-up" data-aos-easing="linear">
//                     <img src={crop} alt="" srcset="" />
//                 </div> */}
//             </div>
//             <Experience/>
//             <AchievementPage/>
//         </>
        
//     )
// }
import sir_image from '../../assets/self_image.jpg'
import sir from '../../assets/sir.png'
import s from '../../assets/s.png'
import crop from '../../assets/crop.jpg'
import '../../css/Home.css'
import AchievementPage from '../AchievementPage'
import Experience from '../Experience'
import { useEffect } from 'react'

export default function Home() {
    useEffect(()=>{
        var navbar = document.querySelector('.navbar');
    
    // Set the position property to an empty string
    navbar.style.position = 'absolute';
      },[])
    return(
        <>
            <div className="home_container">
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
                {/* <div className="home_left" data-aos="fade-up-right">
                    <div className="home_content">
                    <h1 data-aos="">Dr. Mahadeo Dinkar Irkar</h1>
                    <h2 data-aos="">( BA , B.ED , MA , NET , SET )</h2>
                    <p data-aos="">
                        "शिक्षक हा समाजाचा शिल्पकार असतो. तो विद्यार्थ्यांना ज्ञान, 
                        कौशल्ये व मूल्ये शिकवतो.शिक्षक आपल्या विद्यार्थ्यांचे भविष्य 
                        घडवण्याचे कार्य करतो. त्यांचे मार्गदर्शन व प्रेरणा विद्यार्थ्यांना 
                        यशस्वी व जबाबदार नागरिक बनवते."
                    </p>
                    </div>
                </div>
                <div className="home_right"  data-aos="fade-up" data-aos-easing="linear">
                    <img src={crop} alt="" srcset="" />
                </div> */}
            </div>
            <Experience/>
            <AchievementPage/>
        </>
        
    )
}