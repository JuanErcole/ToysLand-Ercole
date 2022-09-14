import {useState} from 'react';
import './Itemcount.css'

export const ItemCount = ({stock, initial, onAdd}) => {

    const [counter, setCounter] = useState(initial);

    const aumentarCont = () =>{
        if(counter < stock) setCounter(counter + 1);
    };

    const descontarCont = () =>{
        if(counter > 1) setCounter(counter - 1);
    };

  return (
    <div className='counter'>
        <div className="counter__buttons">
            <button onClick={descontarCont}>-</button>
            <span>{counter}</span>
            <button onClick={aumentarCont} >+</button>
        </div>
        <button onClick={()=>onAdd(counter)} disabled={stock === 0} className='button__carrito'>{stock === 0 ? 'Sin stock' : 'Agregar al carrito'}</button>

    </div>
  )
}
