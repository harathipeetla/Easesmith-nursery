import { BsInstagram } from "react-icons/bs";
import { FaFacebook } from "react-icons/fa";
import { FaSquareThreads } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";

import './index.css'
const Footer =()=>{
    return(
        <div className="footer-container">
            <div className="footer-first-section">
                <div className="newsletter-part">
                    <h1>SUBSCRIBE TO OUR NEWSLETTER</h1>
                    <p>Lorem ipsum dolor sit amet. Aut ipsam illum et nostrum quidem aut necesbus enim</p>
                    <input type='text' placeholder="enter your email here.."/>
                    <button className="subscribe-btn">SUBSCRIBE</button>
                </div>
                <div className="aboutus-part">
                    <h1>ABOUT US</h1>
                    <li>Our story</li>
                    <li>Blogs</li>
                    <li>Careers</li>
                    <li>Cantact us</li>
                    <li>Help & support</li>
                </div>
                <div className="services-part">
                    <h1>OUR SERVICES</h1>
                    <li>Book Maali</li>
                    <li>Plant Day Care</li>
                    <li>Rent Plants</li>
                    <li>Plants & Pots</li>
                    <li>Gardening Tools</li>
                
                </div>
                <div className="links-part">
                    <h1>USEFUL LINKS</h1>
                    <li>My Account</li>
                    <li>Orders & Returns</li>
                    <li>Careers</li>
                    <li>Trems & Conditions</li>
                    <li>Privacy Ploicy</li>
                    <li>Return, Refund & Replacement Policy</li>
                </div>
                <div className="geintouch-part">
                    <h1>GET IN TOUCH</h1>
                    <li>Address:<br/> F-262, first Floor,<br/> Sushant Lok Phase-111 Sector, <br/>Gurgaon, Haryana, <br/>India 122003</li>
                    <li>Call:<br/> +919958287272</li>
                    <li>Email:<br/> care@chaperoneplants.com</li>
                </div>
            </div>
            <div className="footer-second-section">
                <h1>CHAPERONE</h1>
                <p>Lorem ipsum dolor sit amet. Aut ipsam illum et nostrum quidem aut necessitatibus enim ut internos accusantium a numquam autem ab rerum omnis. Non molestiae ratione et laborum doloribus aut molestiae voluptates ut porro excepturi sit molestiae obcaecati qui quis beatae est voluptatem eius. Et architecto nihil id labore omnis hic iste deleniti et porro aspernatur.</p>
            </div>
            <div className="footer-third-section">
                <h1>FOLLOW US ON</h1>
                <ul>
                    <li><a href="https://www.instagram.com/chaperoneplants" target="_blank" rel="noopener noreferrer"><BsInstagram className="icon"/></a></li>
                    <li><a href="https://www.facebook.com/chaperoneplants" target="_blank" rel="noopener noreferrer"><FaFacebook className="icon"/></a></li>
                    <li><a href="https://www.threads.net/chaperoneplants" target="_blank" rel="noopener noreferrer"><FaSquareThreads className="icon"/></a></li>
                    <li><a href="https://www.youtube.com/chaperoneplants" target="_blank" rel="noopener noreferrer"><FaYoutube className="icon"/></a></li>
                    <li><a href="https://www.linkedin.com/chaperoneplants" target="_blank" rel="noopener noreferrer"><FaLinkedin className="icon"/></a></li>
                </ul>
                <hr/>

                <p className="copy-right">© 2023, chaperone.com All rights reserved.</p>
            </div>
        </div>
    )
}

export default Footer