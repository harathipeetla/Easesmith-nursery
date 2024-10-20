import './index.css'

const Modal =({isOpen, onClose,  onAddTocart})=>{

    if(!isOpen) return null
    
    return(
        <div className="cart-modal-container modal-overlay">
            <div className='modal-content'>
            <div className='cart-part-1'>
                <h1>Your Cart</h1>
                <button onClick={onClose}>x</button>
            </div>
            <hr/>
            <div className='cart-part-2'>
                <div className='name-1'>
                    <h1>Congratulations Order Placed!</h1>
                    <img src='https://res.cloudinary.com/dzvtpzf6b/image/upload/v1729353385/cartplant_lkdqbd.png' alt='plant2'/>
                </div>
                <img src='https://res.cloudinary.com/dzvtpzf6b/image/upload/v1729353575/Ellipse_41_sglq4n.png' alt='plant1' className='patch-1'/>
            </div>
            <div className='cart-part-3'>
               <p>Thank you for choosing Chaperone services.
               We will soon get in touch with you!</p>
               <button onClick={onAddTocart} className='add-cart-modal'>Add To the Cart</button>
            </div>
            </div>
        </div>
    )
}

export default Modal