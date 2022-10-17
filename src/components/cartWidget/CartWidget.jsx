import carrito from '../../carrito.svg'
import {Link} from 'react-router-dom'
import './CartWidget.css'

export default function CartWidget() {
    return (
      <div> 
        <Link to={'/Cart'}><img src={carrito} className='imgCarrito' alt="imagen carrito"/></Link>
      </div>
    )
  }