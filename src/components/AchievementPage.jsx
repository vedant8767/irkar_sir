// import '../css/AchievementPage.css'
// import topleft from '../assets/topleft.png'
// import topright from '../assets/topright.png'
// import bottomleft from '../assets/bottomleft.png'
// import bottomright from '../assets/bottomright.png'
// import center from '../assets/center.png'
// import school from '../assets/school.png'
// import classroom from '../assets/classroom.png'
// import ribbon from '../assets/ribbon.png'
// import acheivement from '../assets/acheivement.png'
// import achievement from '../assets/achievement.png'
// import readingbook from '../assets/readingbook.png'
// import self_image from '../assets/self_image.jpg'
// import expimg from '../assets/exp_image.jpg';

// import AchievementCard from "./AchievementCard";

// export default function AchievementPage(){
//     return(
//         <div className="achievement" data-aos="fade-up">
//             <div className="achievement_container">
//                 <div className="achievement_left">
//                     <h1>Achivements</h1>
//                     <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.
//                          Odio cumque ullam inventore placeat dolorem aut.</p>
//                          <AchievementCard title="01" 
//                          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. 
//                          Repellat illo deleniti aut, blanditiis nostrum quibusdam in ipsam fuga impedit dicta?"/>
//                          <AchievementCard title="02" description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat illo deleniti aut, blanditiis nostrum quibusdam in ipsam fuga impedit dicta?"/>
//                          <AchievementCard title="03" description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat illo deleniti aut, blanditiis nostrum quibusdam in ipsam fuga impedit dicta?"/>
//                          <AchievementCard title="04" description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat illo deleniti aut, blanditiis nostrum quibusdam in ipsam fuga impedit dicta?"/>
//                 </div>
//                 <div className="achievement_right"   data-aos="flip-right">
//                     <div className="top">
//                         <div className="acheviement_circle">
//                             <img src={school} alt="img" srcset="" /></div>
//                         <div className="acheviement_circle">
//                             <img src={achievement} alt="" srcset="" />
//                         </div>
//                     </div>
//                     <div className="middle">
//                         <div className="border">
//                             <div className="middle_circle">
//                                 <img src={expimg} alt="" srcset="" />
//                             </div>
//                         </div>
//                     </div>
//                     <div className="bottom">
//                         <div className="acheviement_circle">
//                             <img src={readingbook} alt="" srcset="" />
//                         </div>
//                         <div className="acheviement_circle">
//                             <img src={acheivement} alt="" srcset="" />
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     )
// }
import React from 'react'
import '../css/AchievementPage.css'
import ach_mobile from '../assets/ach_mobile.jpg'

export default function AchievementPage (){
  return (
    <div className='achievement_container'>
        <h1>ACHIVEMENTS</h1>
        <div className="white_line"></div>
        <div className="achievement_box">
            <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
            Numquam adipisci deserunt minus voluptatibus reiciendis, 
            nulla obcaecati esse aperiam, in nihil ipsam libero repellat quis, 
            nam perferendis vero corporis asperiores? Esse?
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
            Numquam adipisci deserunt minus voluptatibus reiciendis, 
            nulla obcaecati esse aperiam, in nihil ipsam libero repellat quis, 
            nam perferendis vero corporis asperiores? Esse?
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
            Numquam adipisci deserunt minus voluptatibus reiciendis, 
            nulla obcaecati esse aperiam, in nihil ipsam libero repellat quis, 
            nam perferendis vero corporis asperiores? Esse?
            </p>
        </div>
        <div className="achievement_bottom">
         <div className="white_line_btn"></div>
         <h1> Mahadeo Irkar | 2024 </h1>
         <div className="white_line_btn"></div>
        </div>
        <div className="acheviement_mobile">
          <div className="ach_top">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt repellendus veritatis
             eum nisi eveniet fuga omnis minima ratione dolore autem. Adipisci,
            doloremque ea? Facilis odio et quisquam repudiandae ipsum quaerat incidunt doloribus quidem, 
            facere debitis.Non aperiam qui voluptatum amet.
          </p>
          </div>
          <div className="ach_middle">
            <img src={ach_mobile} alt="" />
          </div>
          <div className="ach_bottom">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt repellendus veritatis
             eum nisi eveniet fuga omnis minima ratione dolore autem. Adipisci,
            doloremque ea? Facilis odio et quisquam repudiandae ipsum quaerat incidunt doloribus quidem, 
            facere debitis.Non aperiam qui voluptatum amet.
          </p>
          </div>

        </div>
    </div>
  )
}
