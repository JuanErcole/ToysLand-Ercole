import React, {useContext} from 'react';
import { CartContext } from '../../contex/CartContext';

export function Cart (){
  const {items} = useContext(CartContext);
  return (
  
    <div>
        {!items.length && <h2>Carrito vacio.</h2>}
        {items && <ol>
          {items.map((item => <li>{item.title} - {item.quantity}</li>))}
        </ol>}
    </div>
    
  );
};