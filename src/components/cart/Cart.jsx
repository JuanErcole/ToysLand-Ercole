/* import { clear } from '@testing-library/user-event/dist/clear'; */
import {useContext} from 'react';
import { CartContext } from '../../contex/GlobalProvider';
import CartItems from '../CartItems/CartItems';
import './Cart.css'

export function Cart (){
  const {items, clear, precioFinal} = useContext(CartContext);
  
  return (
  
    <div>
        {!items.length && <h2>Carrito vacio.</h2>}
        {items.map((item => <CartItems items={item}/>))}
        <h1>Total: ${precioFinal}</h1>
        <button className='cart__container--buttonDelete' onClick={clear}>vaciar carrito</button>
        <button className='cart__container--buttonPay'>PAGAR</button>
    </div>
    
  );
};