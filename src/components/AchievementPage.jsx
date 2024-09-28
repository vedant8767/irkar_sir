import '../css/AchievementPage.css'
import topleft from '../assets/topleft.png'
import topright from '../assets/topright.png'
import bottomleft from '../assets/bottomleft.png'
import bottomright from '../assets/bottomright.png'
import center from '../assets/center.png'
import school from '../assets/school.png'
import classroom from '../assets/classroom.png'
import ribbon from '../assets/ribbon.png'
import acheivement from '../assets/acheivement.png'
import achievement from '../assets/achievement.png'
import readingbook from '../assets/readingbook.png'
import self_image from '../assets/self_image.jpg'

import AchievementCard from "./AchievementCard";

export default function AchievementPage(){
    return(
        <div className="achievement" data-aos="fade-up">
            <div className="achievement_container">
                <div className="achievement_left">
                    <h1>Achivements</h1>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                         Odio cumque ullam inventore placeat dolorem aut.</p>
                         <AchievementCard title="01" 
                         description="Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                         Repellat illo deleniti aut, blanditiis nostrum quibusdam in ipsam fuga impedit dicta?"/>
                         <AchievementCard title="02" description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat illo deleniti aut, blanditiis nostrum quibusdam in ipsam fuga impedit dicta?"/>
                         <AchievementCard title="03" description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat illo deleniti aut, blanditiis nostrum quibusdam in ipsam fuga impedit dicta?"/>
                         <AchievementCard title="04" description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat illo deleniti aut, blanditiis nostrum quibusdam in ipsam fuga impedit dicta?"/>
                </div>
                <div className="achievement_right"   data-aos="flip-right">
                    <div className="top">
                        <div className="acheviement_circle">
                            <img src={school} alt="img" srcset="" /></div>
                        <div className="acheviement_circle">
                            <img src={achievement} alt="" srcset="" />
                        </div>
                    </div>
                    <div className="middle">
                        <div className="border">
                            <div className="middle_circle">
                                <img src={self_image} alt="" srcset="" />
                            </div>
                        </div>
                    </div>
                    <div className="bottom">
                        <div className="acheviement_circle">
                            <img src={readingbook} alt="" srcset="" />
                        </div>
                        <div className="acheviement_circle">
                            <img src={acheivement} alt="" srcset="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}