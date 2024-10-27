import '../css/RecentActivityPage.css'
import self_image from '../assets/self_image.jpg'
import leftflower from '../assets/leftflower.png'
import rightflower from '../assets/rightflower.png'
import mid from '../assets/mid.png'
// import AOS from 'aos';
// import 'aos/dist/aos.css';
import { useEffect } from 'react'
import { Helmet } from 'react-helmet-async'

export default function RecentActivityPage (){
    useEffect(()=>{
        var navbar = document.querySelector('.navbar');
        document.querySelectorAll('.btn').forEach(function(button) {
            button.style.color = 'white';
        });
        document.querySelector('.navbar h1').style.color = 'white';
        navbar.style.position = 'relative';
        navbar.style.backgroundColor = 'black';
    },[])
    // useEffect(()=>{
    //     AOS.init({
    //         // Add options here, if needed
    //         duration: 1500, // Animation duration in milliseconds
    //         once: true, // Whether animation should happen only once or every time you scroll
    //       });
    // },[])
    function gotoyt(videoId){
        window.location.href = `https://www.youtube.com/watch?v=${videoId}`;
    }
    return(
        <div className="recent_activity_container">
            <Helmet>
            <title>Mahadeo irkar activity </title>
            <meta name="description" content="Recent activity of mahadeo irkar such as speech, yt video, meet up with Prakash amte" />
            <link rel="canonical" href='https://irkar-sir.vercel.app/recentactivity'/>
            </Helmet>
            <div className="recent_activity">
                <h1>Recent Activity</h1>
                <div className="recent_container">
                    <div className="recent_eachcard" data-aos="fade-up" onClick={()=>gotoyt('k-8H4R3e-QE')}>
                        <div className="card_circle">
                            <img src="https://img.youtube.com/vi/k-8H4R3e-QE/hqdefault.jpg" alt="image" />
                        </div>
                        <div className="card_content">
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit eligendi soluta minima error 
                                beatae accusantium labore architecto, amet reprehenderit dolorem.</p>
                        </div>
                    </div>
                    <div className="recent_eachcard" data-aos="fade-up" onClick={()=>gotoyt('1TpvtbUEBGA')}>
                        <div className="card_circle">
                        <img src="https://img.youtube.com/vi/1TpvtbUEBGA/hqdefault.jpg" alt="" />
                        </div>
                        <div className="card_content">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit eligendi soluta minima error 
                        beatae accusantium labore architecto, amet reprehenderit dolorem.</p>
                        </div>
                    </div>
                    <div className="recent_eachcard" data-aos="fade-up" onClick={()=>gotoyt('vgjdaSf62ak')}>
                        <div className="card_circle">
                        <img src="https://img.youtube.com/vi/vgjdaSf62ak/hqdefault.jpg" alt="" />
                        </div>
                        <div className="card_content">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit eligendi soluta minima error 
                        beatae accusantium labore architecto, amet reprehenderit dolorem.</p>
                        </div>
                    </div>
                </div>
                <div className='recent_images'>
                    <div className="recent_left_flower">
                        <img src={leftflower} alt="" />
                    </div>
                    <div className="recent_mid_image">
                        <img src={mid} alt="" />
                    </div>
                    <div className="recent_right_flower">
                        <img src={rightflower} alt="" />
                    </div>
                </div>
            </div>
        </div>
        // <div className='recentactivity'>
        // <h1>Recent Activities</h1>
        // <div className='recentactivity_container'>
        //     <div className="main_card">
        //         <img src={`https://img.youtube.com/vi/1TpvtbUEBGA/maxresdefault.jpg`} alt="yt" onClick={()=>gotoyt('1TpvtbUEBGA')}/>
        //         <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias ipsam tempora ex ad molestiae accusantium excepturi odit ullam nesciunt impedit.</p>
        //     </div>
        //     <div className="subcards">
        //         <div className="eachcardachev">
        //         <img src={`https://img.youtube.com/vi/vgjdaSf62ak/maxresdefault.jpg`} alt="yt" onClick={()=>gotoyt('vgjdaSf62ak')}/>
        //             <p>Lorem ipsum dolor sit amet consectetur 
        //                 adipisicing elit. Adipisci velit ab
        //                  eaque recusandae reprehenderit est voluptatum quod, culpa debitis eius.</p>
        //         </div>
        //         <div className="eachcardachev">
        //         <img src={`https://img.youtube.com/vi/1TpvtbUEBGA/maxresdefault.jpg`} alt="yt" onClick={()=>gotoyt('1TpvtbUEBGA')}/>
        //             <p>Lorem ipsum dolor sit amet consectetur 
        //                 adipisicing elit. Adipisci velit ab
        //                  eaque recusandae reprehenderit est voluptatum quod, culpa debitis eius.</p>
        //         </div>
        //         <div className="eachcardachev">
        //         <img src={`https://img.youtube.com/vi/kp9MgdI5GFk/maxresdefault.jpg`} alt="yt" onClick={()=>gotoyt('kp9MgdI5GFk')}/>
        //             <p>Lorem ipsum dolor sit amet consectetur 
        //                 adipisicing elit. Adipisci velit ab
        //                  eaque recusandae reprehenderit est voluptatum quod, culpa debitis eius.</p>
        //         </div>
        //     </div>
        // </div>
        // </div>
    )
}