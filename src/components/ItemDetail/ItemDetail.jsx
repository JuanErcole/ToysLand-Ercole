import datos from '../../assets/datos.json'
import {useState, useEffect} from 'react';


const ItemDetail = () => {

  const [productos, setProductos] = useState([])

  useEffect (()=>{
    const consulta = new Promise ((resolve, rejected) =>{

        setTimeout(()=>{
          resolve(datos)
        }, 5000);
    })

    consulta.then(resultado=>setProductos(resultado));

  },[]);  

  return (
    <>
      {productos.length < 1 
        ? <span className="loader">Cargando</span>
        : datos.map((item, index) =>(
        <div className='card'>
          <div className="card__img">
            <img src={item.img} index={index} alt="" />
          </div>  
          <div className="card__text">
            <span className='card__price' index={index}>$ {item.price}</span>
            <p className='card__title' index={index}>{item.title}</p>
            <p className='card__info' index={index}>{item.info}</p>
            <p className='card__stock' index={index}>Stock: {item.stock}</p>
            <button className='card__btn'>Ver producto</button>
        </div>
      </div>))}
    </>
  )
}

export default ItemDetail