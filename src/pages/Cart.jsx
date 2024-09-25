import React, { useContext, useState } from 'react'
import { PRODUCTS } from '../products'
import { Shopcontext } from '../context/shopcontext'
import { IoMdAddCircle } from "react-icons/io";
import { IoRemoveCircle } from "react-icons/io5";
import { Navigate, useNavigate } from 'react-router-dom';

const Cart = () => {
    // const { cartItems } = useContext(Shopcontext);
    const { addToCart, removeFromCart, cartItems, getTotalCartAmount } = useContext(Shopcontext);

    const totalAmount = getTotalCartAmount();

    // Navigation
    const navigate = useNavigate();

  return (
    <div className='app__cart'>
        <div>
            <h1>Your Cart Items</h1>
        </div>
        <div className="app__cart-items">
            {PRODUCTS.map((product)=> (cartItems[product.id]!== 0)?<div className='app__product-item app__product-item_cart'>
                <div className='app__products-image-cart'><img src={product.productImage} alt="" /></div>

                <p>{product.productName}</p>
                <p>$ {product.price}</p>
                <b className='item__count'>({cartItems[product.id]})</b>
                <div className='add__icon-items' onClick={()=>addToCart(product.id)}><IoMdAddCircle /></div>
                <div className='remove__icon-items' onClick={()=>removeFromCart(product.id)}><IoRemoveCircle /></div>
            </div>:"")}

        </div>

        {/* Check Out */}
        <div className='CheckOut'>
            <h2>Check Out</h2>
            {totalAmount > 0? 
            <div className='app__-cart'>
                <p>Total Price: <b>${totalAmount}</b> </p>
                <button onClick={()=> navigate("/")} className='add_cartbutton'>Continue Shopping</button>
                <button className='add_cartbutton'>Check Out</button>

            </div>:
            <div className='app__empty-cart'>
                <b>Your cart is empty</b>
                <button onClick={()=>navigate("/")} className='add_cartbutton'>Continue Shopping</button>
            </div>
            }
           
        </div>

      
    </div>
  )
}

export default Cart
