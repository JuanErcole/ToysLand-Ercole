import React, {useContext} from 'react';
import { CartContext } from '../../contex/GlobalProvider';


const CartItems = ({items}) => {

  const {deleteItem, precioFinal} = useContext(CartContext);

  return (
    <div>
      <h1>{items.title} - {items.quantity} - {items.price}</h1>
      <p>${precioFinal}</p>
      <button onClick={()=>deleteItem(items.id)}>X</button>
    </div>
  )
}

export default CartItems