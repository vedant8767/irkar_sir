import sir_image from '../../assets/self_image.jpg'
import '../../css/Home.css'
import AchievementPage from '../AchievementPage'
import Experience from '../Experience'

export default function Home() {
    return(
        <>
            <div className="home_container">
                <div className="home_left">
                    <h1 data-aos="fade-right">डॉ.महादेव दिनकर इरकर</h1>
                    <h2 data-aos="fade-right">( BA , B.ED , MA , NET , SET )</h2>
                    <p data-aos="fade-left">
                        शिक्षक हा समाजाचा शिल्पकार असतो. तो विद्यार्थ्यांना ज्ञान, 
                        कौशल्ये व मूल्ये शिकवतो.शिक्षक आपल्या विद्यार्थ्यांचे भविष्य 
                        घडवण्याचे कार्य करतो. त्यांचे मार्गदर्शन व प्रेरणा विद्यार्थ्यांना 
                        यशस्वी व जबाबदार नागरिक बनवते
                    </p>
                </div>
                <div className="home_right" data-aos="fade-up">
                    <img src={sir_image} alt="" srcset="" />
                </div>
            </div>
            <Experience/>
            <AchievementPage/>
        </>
    )
}