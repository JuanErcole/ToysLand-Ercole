import carrito from '../../carrito.svg'
import './CartWidget.css'

export default function CartWidget() {
    return (
      <div> 
        <img src={carrito} className='imgCarrito' alt="imagen carrito" />
      </div>
    )
  }