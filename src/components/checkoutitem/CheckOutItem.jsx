import React, { useContext } from 'react'
import './checkout-item.styles.scss'
import { CartContext } from '../../contexts/cart.contexts';
function CheckOutItem({cartItem}) {
    const {name,imageUrl,quantity,price}=cartItem;
const {addItem,removeItem,clearCartItem}=useContext(CartContext);
const addIt=()=>{addItem(cartItem)}  
const rmIt=()=>{removeItem(cartItem)}  
return (
    <div className='checkout-item-container'>
        <div className="image-container">
            <img src={imageUrl} alt={name} />
            </div>
            <span className='name'>{name}</span>
            <span className='quantity'>
                <div className="arrow" onClick={rmIt}>
                    &#10094;
                </div>
                <span className='value'>{quantity}</span>
                <div className="arrow" onClick={addIt}>
                &#10095;
                </div>
                </span>
            <span className='price'>$ {price}</span>
            <span className='price'>$ {quantity*price}</span>
            <div className="remove-button" onClick={()=>{clearCartItem(cartItem)}}>&#10005;</div>
    </div>
  )
}

export default CheckOutItem