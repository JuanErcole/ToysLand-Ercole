import React from 'react'
import datos from '../../assets/datos.json'
import ItemList from '../ItemList/ItemList'
import './itemListContainer.css'
import {useState, useEffect} from 'react';


const ItemListContainer = () => {

  const [items, setProductos] = useState([])

  useEffect (()=>{
    const consulta = new Promise ((resolve, rejected) =>{

        setTimeout(()=>{
          resolve(datos)
        }, 5000);
    })

    consulta.then(resultado=>setProductos(resultado));

  },[]);
  
  return (
    <div className='itemListContainer'>
      {items.length < 1 
      ? <span className="loader">Cargando</span> 
      : <ItemList items={items} />}
    </div>
  )
}

export default ItemListContainer




    {/* <div className='itemListContainer'>
      {productos.length < 1 
      ? <span className="loader">Cargando</span> 
      : datos.map((item, index) =><ItemList props={productos} />)}
    </div> */}




    {/* <div className='itemListContainer'>
      <ItemList props={productos}/>
    </div> */}