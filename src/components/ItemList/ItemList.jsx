import React from 'react'
import Item from '../Item/Item'
import './ItemList.css'

const ItemList = ({items}) => {

  
  console.log(`se cargo pero no esta listo`);

  return (
    <>
      <div className="item">
        {items.map((item, index) =>
          <Item category ={item.category} key={index} id={item.id} title={item.title} price={item.price} info={item.info} stock={item.stock} img={item.img}/>
        )}
      </div>
    </>
  )
}

export default ItemList







      {/* <div className='card'>
        <div className="card__img">
          <img src={img} alt="" />
        </div>  
        <div className="card__text">
          <span className='card__price'>$ {price}</span>
          <p className='card__title'>{title}</p>
          <p className='card__info'>{info}</p>
          <p className='card__stock'>Stock: {stock}</p>
          <button className='card__btn'>Ver producto</button>
        </div>
      </div> */}