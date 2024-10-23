import handimage from '../../assets/hand.png'
import leftflower from '../../assets/cutleft.png'
import rightflower from '../../assets/cutright.png'
import bubble from '../../assets/lekhbg.png'
import '../../css/LekhStructure.css'
import { useEffect } from 'react'

export default function LekhStructure(){
    useEffect(()=>{
        var navbar = document.querySelector('.navbar');
        // document.querySelectorAll('.btn').forEach(function(button) {
        //     button.style.color = 'black';
        // });
        
    
    // Set the position property to an empty string
    navbar.style.position = 'relative';
    // btn.style.color = 'black';
    // navbar.style.color="black"
    // document.querySelectorAll('.navItems ul li').forEach(function(li) {
    //     btn.style.color = 'black';;
    // });
    
      },[])
    return(
        <div className="lekh_container">
            <img src={handimage} alt="" className='lekh_image' />
            {/* <div className="lekh_image">
                <img src={handimage} alt="" />
            </div> */}
            <div className="lekh_title">
                <h1>लेख</h1>
            </div>
            <div className="lekh_content" data-aos="fade-up">
                <p>"लेखक हा समाजाचा आरसा असतो. तो शब्दांच्या माध्यमातून जीवनाच्या अनुभवांना पानांवर उतारतो. 
                    लेखकाच्या लेखणीतून कल्पकता, भावना, आणि वास्तवाचा संगम दिसतो. लिखाणातून समाजातील समस्या, विचारधारा आणि संवेदनशीलता प्रकट होतात.
                     शब्दांच्या या खेळातून तो वाचकाच्या मनाचा ठाव घेतो आणि त्याच्या विचारसरणीला नवीन दिशा देतो".</p>
                <div className="lekhcards">
                    <div className="eachcard" data-aos="fade-up">
                        <div className="half_circle">
                            
                        </div>
                        <h1>सामाजिक लेख </h1>
                    </div>
                    <div className="eachcard" data-aos="fade-up">
                        <div className="half_circle"></div>
                        <h1>भाषाविषयक लेख</h1>
                    </div>
                    <div className="eachcard" data-aos="fade-up">
                        <div className="half_circle">

                        </div>
                        <h1>राजकीय लेख</h1>
                    </div>
                    <div className="eachcard" data-aos="fade-up">
                        <div className="half_circle"></div>
                        <h1>अभ्यासक लेख</h1>
                    </div>
                </div>
            </div>
            {/* <img src={leftflower} alt="" className='left_flower' />
            <img src={rightflower} alt="" className='right_flower'/> */}
            {/* <div className="left_flower">
                <img src={leftflower} alt="" />
            </div>
            <div className="right_flower">
                <img src={rightflower} alt="" />
            </div> */}
        </div>
    )
}