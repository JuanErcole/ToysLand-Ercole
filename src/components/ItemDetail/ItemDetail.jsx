import React from 'react'


const ItemDetail = ({item}) =>{
  

  return (
    <>
      {<div className='card'>
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
      </div>}
    </>
  )
}

export default ItemDetail