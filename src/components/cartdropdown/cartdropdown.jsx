import React, { useContext } from 'react'

import "./cart-dropdown.styles.scss"
import Button from '../button/Button'
import CartItem from '../cart-item/CartItem'
import { UserContext } from '../../contexts/user.context'
import { CartContext } from '../../contexts/cart.contexts'
import { useNavigate } from 'react-router-dom'
function CartDropDown() {
const {cartItems}=useContext(CartContext);
const navigate=useNavigate();
const goToCheckout=()=>{
    navigate('checkout')
}
    return (
    <div className='cart-dropdown-container'>
        <div className="cart-items">
{cartItems.map(cartItem=><CartItem cartItem={cartItem}/>)}

        <Button onClick={goToCheckout}>Check Out</Button>
        </div>
    </div>
  )
}

export default CartDropDown