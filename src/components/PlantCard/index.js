import { useState } from 'react';
import {useNavigate} from 'react-router-dom'
import { CiHeart } from "react-icons/ci";
import { MdCurrencyRupee } from "react-icons/md";

import imageStar from '../../assests/image 10.jpg'
import Modal from '../CartModalPage';
import "./index.css"


const ProductCard =({product})=>{
    const {image,name} = product
    const [ismodalOpen, setIsModalOpen] = useState(false)



    const navigate = useNavigate()
    const redirectToThankYoupage =()=>{
        navigate(`/thank-you/${name}`)
    }

    const openModal =()=>{
        setIsModalOpen(true)
    }

    const closeModal=()=>{
        setIsModalOpen(false)
    }

    const addToCart =()=>{
        closeModal()
    }

    

    return(
        <div className="product-card-container">
            <div className="image-section">
                <div className='image-heart-conatiner'>
                    <img src={image} alt="plant" className="plant-img"/>
                    <CiHeart className='heart-icon'/>
                </div>
                    <button className="view-product" onClick={redirectToThankYoupage}>View Product</button>
            </div>
            <div className="details-section">
                <h3>{name}</h3>
                <p>Indoor Plant, Low maintenance</p>
                <img src={imageStar} alt="stars"/> <span>4.9</span>
                <p className="price"><span className="strike"><MdCurrencyRupee className="strike-icon"/>395</span><MdCurrencyRupee/>299</p>
                <div>
                    <button className="cart-button" onClick={openModal}>Add to cart</button>
                    <button className="rent-button">Buy on Rent</button>
                </div>
            </div>
            <Modal
            isOpen={ismodalOpen} 
            onClose={closeModal}
            onAddTocart={addToCart}
            />
        </div>
    )
}

export default ProductCard