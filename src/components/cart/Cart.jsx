/* import { clear } from '@testing-library/user-event/dist/clear'; */
import React, {useContext} from 'react';
import { CartContext } from '../../contex/GlobalProvider';
import CartItems from '../CartItems/CartItems';

export function Cart (){
  const {items, clear, precioFinal} = useContext(CartContext);
  
  return (
  
    <div>
        {!items.length && <h2>Carrito vacio.</h2>}
        {items.map((item => <CartItems items={item}/>))}
        <button onClick={clear}>vaciar ca</button>
    </div>
    
  );
};