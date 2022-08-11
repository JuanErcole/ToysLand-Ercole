import React from 'react'
import CartWidget from '../cartWidget/CartWidget'
import './NavBar.css' 


export default function NavBar() {
  return (
    <div className='header'> 
      <h1 className='logo'>ToysLand</h1>
      <div className="links">
        <ul>
          <li><a href="">Inicio</a></li>
          <li><a href="">Categorias</a></li>
          <li><a href="">Nosotros</a></li>
        </ul>
        <CartWidget/>
      </div>


    </div>
  )
}
