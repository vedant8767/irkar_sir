import '../../css/Home.css'
import AchievementPage from '../AchievementPage'
import Experience from '../Experience'
import { useEffect } from 'react'

export default function Home() {
    useEffect(()=>{
        var navbar = document.querySelector('.navbar');
        document.querySelectorAll('.btn').forEach(function(button) {
            button.style.color = 'white';
        });
        document.querySelector('.navbar h1').style.color = 'white';    
        navbar.style.backgroundColor = 'transparent';
        navbar.style.width ='100%';
        navbar.style.position = 'absolute';
    },[])

    return(
        <>
            <div className="home_container">
            <div className="home_content">
                    <h1 data-aos="fade-up">Dr. Mahadeo Dinkar Irkar</h1>
                    <h2 data-aos="fade-up">( MA.M.Ed.PHD.SET/NET )</h2>
                    <p data-aos="fade-up">
                        "शिक्षक हा समाजाचा शिल्पकार असतो. तो विद्यार्थ्यांना ज्ञान, 
                        कौशल्ये व मूल्ये शिकवतो.शिक्षक आपल्या विद्यार्थ्यांचे भविष्य 
                        घडवण्याचे कार्य करतो. त्यांचे मार्गदर्शन व प्रेरणा विद्यार्थ्यांना 
                        यशस्वी व जबाबदार नागरिक बनवते."
                    </p>
                    </div>
            </div>
            <Experience/>
            <AchievementPage/>
        </>
        
    )
}