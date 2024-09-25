import { PRODUCTS } from '../products';
import React, { createContext, useState } from 'react'

export const Shopcontext = createContext(null);

const getDefaultcart = ()=>{
    // Object is initially empty
    let cart = {};
    for (let i = 1; i < PRODUCTS.length + 1; i++) {
        cart[i] = 0;
        
    }
    return cart;
};
export const ShopContextProvider = (props) =>{
    // Define all functions and send to the provider

    // States
    const [cartItems,setCartItems] = useState(getDefaultcart());

    // To find the total amount
    const getTotalCartAmount = () =>{
        let totalAmount = 0;
        for(const item in cartItems){
            if (cartItems[item] > 0) {
                let itemInfo = PRODUCTS.find((product)=>product.id === Number(item));
                totalAmount += cartItems[item] * itemInfo.price;
            }
        }
        return totalAmount;
    }

    function addToCart(itemID) {
        setCartItems((prev) => ({...prev,[itemID]: prev[itemID] + 1}));
    }
    function removeFromCart(itemID) {
        setCartItems((prev) => ({...prev,[itemID]: prev[itemID] - 1}));
    }

    const contextvalue = { cartItems, addToCart, removeFromCart, getTotalCartAmount };

    console.log(cartItems);
    return <Shopcontext.Provider value={contextvalue}>{props.children}</Shopcontext.Provider>
}