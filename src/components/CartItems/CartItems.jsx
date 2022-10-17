import './CartItems.css';
import React, {useContext} from 'react';
import { CartContext } from '../../contex/GlobalProvider';


const CartItems = ({items}) => {

  const {deleteItem, precioFinal} = useContext(CartContext);

  return (
    <div className='cartItems__container'>
      <img className='cartItems__container--img' src={items.img} alt="" />
      <div className="cartItems__container--detail">
        <h2>{items.title}</h2>
        <h3>Cantidad: {items.quantity}</h3>
        <h4>Precio: ${items.price}</h4>
      </div>
      <button className='cartItems__container-delete' onClick={()=>deleteItem(items.id)}>X</button>
    </div>
  )
}

export default CartItems