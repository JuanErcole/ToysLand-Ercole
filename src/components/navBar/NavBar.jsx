import React from 'react'
import './NavBar.css' 
import carrito from '../../carrito.svg'

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
        <img src={carrito} className='imgCarrito' alt="imagen carrito" />
      </div>


    </div>
  )
}
