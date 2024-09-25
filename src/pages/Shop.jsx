import React, { useContext } from 'react'
import { PRODUCTS } from '../products'

// Import shopcontext to allow deletion and addition into the cart
import { Shopcontext } from '../context/shopcontext'

const Shop = () => {
    // const { id,productName,price,productImage} = props.data;
    // const id = PRODUCTS.data.id;
    const { addToCart, cartItems } = useContext(Shopcontext);

    // To indicate noof items selected
    // const cartItemCount = cartItems[id];
    // const id = cartItems[id];
  return (
    <div className='app__shop'>
        <div className="logo">
            <h1>Duka<span>Smart</span> Holdings</h1>
        </div>
        <div className="app__products">
            {/* We map through the array */}
           {PRODUCTS.map((item) => 
          //  <Product data={item}></Product>
           <div key={item.id} className='app__product-item'>
            <div className='app__products-image'>
                <img src={item.productImage} alt="" />
            </div>
            <p>{item.productName}</p>
            <p>$ {item.price}</p>
            <button className='add_cartbutton' onClick={()=>addToCart(item.id)}>Add to cart ({cartItems[item.id]})</button>
           </div>
           )}

        </div>
     
    </div>
  )
}

export default Shop
