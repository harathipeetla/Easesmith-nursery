import { useParams } from "react-router-dom"

import Header from "../Header"
import ThankYouImage from '../../assests/thankyou.jpg'

import "./index.css"

const ThankYouPage =()=>{
    const {productName} = useParams()
    return(
        <div className="thankyou-page-container">
            <div>
                <Header/>
            </div>
            <div>
            <img src={ThankYouImage} alt="thank you" className="thank-you-image"/>
            <h1>"Thank you for your interest in <span className="product-name">{productName}</span>!"</h1>
            </div>
        </div>
    )
}

export default ThankYouPage