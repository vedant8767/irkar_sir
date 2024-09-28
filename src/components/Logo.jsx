import logoimage from '../assets/logo.png'
import '../css/Logo.css'

export default function Logo(){
    return(
        <div className='Logo'>
            <img src={logoimage} alt="" />
        </div>
    )
}