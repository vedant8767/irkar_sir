import '../css/ContactPage.css'

export default function ContactPage (){
    return(
        <div className='contact_container' data-aos="zoom-in">
            <div className="top_section">
                <h1>LETS'S CONNECT</h1>
                <h2>WITH US!</h2>
            </div>
            <div className="mid_section">
                <div className="mid_left">
                    <div className="icon_container">
                        <div className="icon_circle">
                        <i class="fa fa-phone fa-xs" aria-hidden="true"></i>
                        </div>
                        <p>+123-456-7890</p>
                    </div>
                    <div className="icon_container">
                        <div className="icon_circle">
                        <i class="fa fa-globe fa-xs" aria-hidden="true"></i>
                        </div>
                        <p>www.irkarmahadev.com</p>
                    </div>
                    <div className="icon_container">
                        <div className="icon_circle">
                        <i class="fa fa-envelope fa-xs" aria-hidden="true"></i>
                        </div>
                        <p>hello@real123@gmail.com</p>
                    </div>
                    <div className="icon_container">
                        <div className="icon_circle">
                        <i class="fa fa-map-marker fa-xs" aria-hidden="true"></i>
                        </div>
                        <p>123 Anywhere vasai west</p>
                    </div>
                </div>
                <div className="mid_right">
                    <form action="">
                        <input type="text" placeholder='Name' />
                        <input type="text" placeholder='Email' />
                        <textarea name="" id="" placeholder='Message'></textarea>
                        <button>Send</button>
                    </form>
                </div>
            </div>
            <div className="bottom_section">
                <h1>We're here to assist you on your website journey!</h1>
            </div>

        </div>
        // <div className="contact_container">
        //     <div className="contact_left">
        //         <h1>Contact Me Now</h1>
        //         <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
        //             Voluptatem dicta ex quaerat voluptate mollitia eveniet praesentium,
        //              nemo quae sequi, officiis ipsam? Reiciendis ad
        //              consectetur corporis corrupti quam blanditiis consequuntur deserunt!
        //         </p><br />
        //         <h1>Address</h1>
        //         <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, autem?</p><br />
        //         <h1>Phone Number & Email</h1>
        //         <span>+91 8767476236</span><br />
        //         <span>ved123@gmail.com</span>
        //     </div>
        //     <div className="contact_right">
        //         <h1>Send Me a Message</h1>
        //         <form action="">
        //             <input type="text" placeholder="Name" />
        //             <input type="text" placeholder="Email" />
        //             <input type="text" placeholder="Message" />
        //             <button>send</button>
        //         </form>
        //     </div>
        // </div>
    )
}