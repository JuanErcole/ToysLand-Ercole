import React from 'react'
import './Item.css'

const item = ({img, price, title, info, stock}) => {
  return (    
    <div className='card'>
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
    </div>
    
  )
}

export default item