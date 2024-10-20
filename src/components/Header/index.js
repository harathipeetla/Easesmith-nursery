import Navbar from '../Nabvar'
import './index.css'

function Header(){
    return(
        <div className="header-container">
            <div className="first-part">
                <span className='free-ship'>Free Shipping on orders above 999/-</span>
                <span className='call-us'>Call us on:+91 9876009274</span>
            </div>
            <div className="second-part">
                <Navbar/>
            </div>
        </div>
    )
}
export default Header