import React from 'react'
import datos from '../../assets/datos.json'
import ItemList from '../ItemList/ItemList'
import './itemListContainer.css'
import {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom'



const ItemListContainer = () => {

  const [items, setItems] = useState([]);
  const {categoryid} = useParams();

  useEffect (()=>{
    const consulta = new Promise ((resolve) =>{
        let datosFiltered = [];
        setTimeout(()=>{
          datosFiltered = categoryid ? datos.filter(element => element.category == categoryid ) : datos;
          resolve(datosFiltered)
        }, 2000);
    })

    consulta.then(resultado=>setItems(resultado));

  },[categoryid]);
  
  return (
    <div className='itemListContainer'>
      {items.length
      ? <ItemList items={items} /> 
      : <span className="loader">Cargando</span>}
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