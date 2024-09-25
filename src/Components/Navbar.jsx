import React from 'react'
import { Link } from 'react-router-dom'
import { MdOutlineShoppingCart } from "react-icons/md";

const Navbar = () => {
  return (
    <div className='app__navbar'>
        <div className="app__navbar-logo"><h1 className='logo'>Duka<span>Smart</span></h1></div>
        <div className="app__navbar-links">
           <Link to="/" className='links__main'>Shop</Link>
           <Link to="/cart" className='links__main'><MdOutlineShoppingCart/></Link>
        </div>
    </div>
  )
}

export default Navbar
