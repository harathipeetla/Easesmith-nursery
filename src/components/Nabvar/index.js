import { GoPerson } from "react-icons/go";
import { BsCart3 } from "react-icons/bs";
import "./index.css"

function Navbar(){
    return(
        <div className="navbar-container">
            <div className="logo-container">
                <img src="https://res.cloudinary.com/dzvtpzf6b/image/upload/v1729258148/image_55_gsease.png" className="logo-img" alt="logo"/>
                <h1 className="logo-name">Chaperone</h1>
            </div>
            <ul className='nav-list-container'>
                <li>Home</li>
                <li>Plants&Pots</li>
                <li>
                    <select>
                        <option>Tools</option>
                        <option>Gardening Tools</option>
                        <option>Pest control</option>
                        <option>Fertilizers</option>
                        <option>Watering Cans</option>
                        <option>Gardern Accessories</option>
                    </select>
                </li>
                <li>
                    <select>
                        <option>Our Services</option>
                        <option>Book a maali</option>
                        <option>Plant Day Care</option>
                        <option>Rent Palnts</option>
                    </select>
                </li>
                <li>Blog</li>
                <li>Our Story</li>
                <li>FaQS</li>
            </ul>
            <div className='profile-cart-container'>
                <div className='profile'>
                    <p className="icon"><GoPerson/></p>
                    <p className="name-profile">Profile</p>
                </div>
                <div className='cart'>
                <p className="icon"><BsCart3/></p>
                <p>Cart</p>
                </div>
            </div>
        </div>
    )
}

export default Navbar