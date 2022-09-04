import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import {ItemCount} from '../ItemCount/ItemCount';
import './ItemDetail.css';


const ItemDetail = ({item}) =>{

  const [counter, setCounter] = useState(0);

  const onAdd = counter =>setCounter(counter);
  

  return (
    <>
      {<div className="itemDetail__bg">
        <div className='itemDetail'>
          <div className="itemDetail__img">
            <img src={item.img} alt="" />
          </div>  
          <div className="itemDetail__text">
            <p className='itemDetail__title'>{item.title}</p>
            <span className='itemDetail__price'>$ {item.price}</span>
            <p className='itemDetail__info'>{item.info}</p>
            <p className='itemDetail__stock'>Stock: {item.stock}</p>
            {counter 
            ? <p className='card__btn--compra'><Link to={'/cart'}>Finalizar compra</Link></p> :
            <ItemCount stock={item.stock} initial={1} onAdd={onAdd}/>}
            <p className='itemDetail__description'>{item.description}</p>
         </div>
        </div>
      </div>
      }
    </>
  )
}

export default ItemDetail



      /* {<div className='card'>
          <div className="card__img">
            <img src={item.img} alt="" />
          </div>  
          <div className="card__text">
            <span className='card__price'>$ {item.price}</span>
            <p className='card__title'>{item.title}</p>
            <p className='card__info'>{item.info}</p>
            <p className='card__stock'>Stock: {item.stock}</p>
            <button className='card__btn'>Ver producto</button>
         </div>
      </div>} */