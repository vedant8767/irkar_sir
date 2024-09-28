import '../css/AchievementCard.css'

export default function AchievementCard({title,description}){
    return(
        <div className="achievement_card" data-aos="fade-up-right">
            <h2>{title}</h2>
            <p>{description}</p>
        </div>
    )
}