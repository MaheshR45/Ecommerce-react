import React, { useState } from "react"
import { BiShoppingBag } from "react-icons/bi"
import { AiOutlineClose } from "react-icons/ai"
import { CartItems } from "./cartlist"



const Cart = ({cartitems,setCartitems,cardOpenc,setCardOpenc}) => {

  const closeCard = () => {
    setCardOpenc(null)
  }
  const quantity =cartitems.length;
  const cartItems = cartitems

 //total
    let total = 0
  cartItems.forEach((item) => {
      total =total + (item.price*item.qty)
    })

  return (
    <>
      <div className='card' onClick={() => setCardOpenc(!cardOpenc)}>
        <BiShoppingBag className='cardIcon' />
        <span className='flexCenter'>{quantity}</span>
      </div>
      <div className={cardOpenc ? "overlay" : "nonoverlay"}></div>

      <div className={cardOpenc ? "cartItem" : "cardhide"}>
        <div className='title flex'>
          <h2>Shopping Cart</h2>
          <button onClick={closeCard}>
            <AiOutlineClose className='icon' />
          </button>
        </div>
          <CartItems cartitems={cartitems} setCartitems={setCartitems}  />
        <div className='checkOut'>
          <button>
            <span>Priceed To Checkout</span>
            <label htmlFor=''>${total}</label>
          </button>
        </div>
      </div>
    </>
  )
}
export default Cart
