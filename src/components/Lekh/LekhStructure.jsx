import handimage from '../../assets/hand.png'
import '../../css/LekhStructure.css'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom' 

export default function LekhStructure(){
    const navigate = useNavigate(); 

    useEffect(() => {
        var navbar = document.querySelector('.navbar');
        document.querySelectorAll('.btn').forEach(function(button) {
            button.style.color = 'white';
        });
        document.querySelector('.navbar h1').style.color = 'white';
        navbar.style.position = 'relative';
        navbar.style.backgroundColor = 'black';
    }, []);

    // Function to handle card click
    const handleCardClick = (title) => {
        navigate('/card-detail', { state: { title } }); 
    }

    return(
        <div className="lekh_container">
            <img src={handimage} alt="" className='lekh_image' />
            <div className="lekh_title">
                <h1>लेख</h1>
            </div>
            <div className="lekh_content" data-aos="fade-up">
                <p>"लेखक हा समाजाचा आरसा असतो. तो शब्दांच्या माध्यमातून जीवनाच्या अनुभवांना पानांवर उतरवितो. लेखकाच्या लेखणीतून कल्पकता, भावना, आणि वास्तवाचा संगम दिसतो. लेखकाच्या लेखणीतून समाजातील समस्या, विचारधारा आणि संवेदनशीलता प्रकट होत असतात. शब्दांच्या या खेळातून तो वाचकांच्या मनाचा ठाव घेतो आणि त्याच्या विचारसरणीला नवीन दिशा व प्रेरणा देतो"</p>
                <div className="lekhcards">
                    <div className="eachcard" data-aos="fade-up" onClick={() => handleCardClick("saihitiklekh")}>
                        <div className="half_circle"></div>
                        <h1>साहित्यविषयक लेख</h1>
                    </div>
                    <div className="eachcard" data-aos="fade-up" onClick={() => handleCardClick("loksaithyalekh")}>
                        <div className="half_circle"></div>
                        <h1>लोकसाहित्य व लोकसंस्कृती लेख
                        </h1>
                    </div>
                    <div className="eachcard" data-aos="fade-up" onClick={() => handleCardClick("samajsudhrakhlekh")}>
                        <div className="half_circle"></div>
                        <h1>समाजसुधारक लेख
                        </h1>
                    </div>
                    <div className="eachcard" data-aos="fade-up" onClick={() => handleCardClick("newspaperlekh")}>
                        <div className="half_circle"></div>
                        <h1>वृत्तपत्रातील लेख </h1>
                    </div>
                    <div className="eachcard" data-aos="fade-up" onClick={() => handleCardClick("researchlekh")}>
                        <div className="half_circle"></div>
                        <h1>संशोधन लेख </h1>
                    </div>
                </div>
            </div>
        </div>
    );
}
