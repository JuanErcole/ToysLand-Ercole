import React from 'react'
import CartWidget from '../cartWidget/CartWidget'
import {NavLink} from 'react-router-dom'
import './NavBar.css' 


export default function NavBar() {
  return (
    <div className='header'> 
      <h1 className='logo'>ToysLand</h1>
      <div className="links">
        <ul>
          <NavLink to={'/'}>Inicio</NavLink>
          <NavLink to={'/productos'}>Productos</NavLink>
          <NavLink to={'/nosotros'}>Nosotros</NavLink>
        </ul>
        <CartWidget/> 
      </div>


    </div>
  )
}
