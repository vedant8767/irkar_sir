import '../css/RecentActivityPage.css'
import leftflower from '../assets/leftflower.png'
import rightflower from '../assets/rightflower.png'
import mid from '../assets/mid.png'
import {getRecentActivity} from '../firebase/firebase'
import { useEffect, useState } from 'react'
import { Helmet } from 'react-helmet-async'

export default function RecentActivityPage (){

    const [activityList,setActivity]=useState([])
    const [loading, setLoading] = useState(true);
    useEffect(()=>{
        var navbar = document.querySelector('.navbar');
        document.querySelectorAll('.btn').forEach(function(button) {
            button.style.color = 'white';
        });
        document.querySelector('.navbar h1').style.color = 'white';
        navbar.style.position = 'relative';
        navbar.style.backgroundColor = 'black';
    },[])
    useEffect(() => {
        const fetchactivity = async () => {
            try {
                    const activityList = await getRecentActivity();
                    if (activityList) {
                        setActivity(activityList);
                        setLoading(false)
                    } else {
                        console.log("no activity available");
                    }
            } 
            catch (error) {
                console.error('Error fetching activity data:', error);
            }
        };

        fetchactivity();
    },[]);

    function gotoyt(videoId){
        window.location.href = `https://www.youtube.com/watch?v=${videoId}`;
    }
    return(
        <div className="recent_activity_container">
            <Helmet>
            <title>Mahadeo irkar activity </title>
            <meta name="description" content="Recent activity of mahadeo irkar such as speech, yt video, meet up with Prakash amte" />
            <link rel="canonical" href='https://mahadeoirkar.com/recentactivity'/>
            </Helmet>
            <div className="recent_activity">
                <h1>Recent Activity</h1>
                <div className="recent_container">
                {loading ? (
            <div className="loader"></div> // Display the CSS spinner
        ) : (
            activityList.length > 0 ? (
                activityList.map((activity, index) => (
                    <div key={index} className="recent_eachcard" data-aos="fade-up" onClick={() => gotoyt(activity.videoid)}>
                        <div className="card_circle">
                            <img src={activity.thumbnail} alt="image" />
                        </div>
                        <div className="card_content">
                            <p>
                                {
                                    activity.description
                                        .split(" ")
                                        .slice(0, 25)
                                        .join(" ") + (activity.description.split(" ").length > 15 ? "..." : "")
                                }
                            </p>
                        </div>
                    </div>
                ))
            ) : (
                <div>No activities found.</div>
            )
        )}
                </div>
                <div className='recent_images'>
                    {/* <div className="recent_left_flower">
                        <img src={leftflower} alt="" />
                    </div> */}
                    <div className="recent_mid_image">
                        <img src={mid} alt="" />
                    </div>
                    {/* <div className="recent_right_flower">
                        <img src={rightflower} alt="" />
                    </div> */}
                </div>
            </div>
        </div>
    )
}