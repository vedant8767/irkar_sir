import '../css/Experience.css'
import expimg from '../assets/self_image.jpg'

export default function Experience(){
    return(
        <div className="experience_container" data-aos="fade-up">
            <h1>Experience</h1>
            <div className="exp_info">
                <div className="exp_img" data-aos="fade-left">
                    <img src={expimg} alt="" />
                </div>
                <div className="exp_content" data-aos="fade-right">
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Inventore aliquam dolores nam corporis a cupiditate est minima maxime quia. 
                        Voluptate, delectus sunt repellat nemo asperiores assumenda eaque laborum.
                    </p>
                    <div className="counts">
                        <div className="eachcount">
                            <h1>122</h1>
                            <h2>Clients</h2>
                        </div>
                        <div className="eachcount">
                            <h1>602</h1>
                            <h2>Projects</h2>
                        </div>
                        <div className="eachcount">
                            <h1>300</h1>
                            <h2>Seminar</h2>
                        </div>
                        <div className="eachcount">
                            <h1>122</h1>
                            <h2>Clients</h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}