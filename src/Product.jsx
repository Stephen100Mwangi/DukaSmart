import React from 'react'
import { PRODUCTS } from './products'

export const Product = (props) => {

    const { id,productName,price,productImage } = props.data;
  return (
    <div>
        <div key={id} className='app__product-item'>
        <div className='app__products-image'>
        <img src={productImage} alt="" />
        </div>
        <p>{productName}</p>
        <p>$ {price}</p>
        <button className='add_cartbutton'>Add to cart</button>
        </div>
    </div>
  )
}

// export default Product
