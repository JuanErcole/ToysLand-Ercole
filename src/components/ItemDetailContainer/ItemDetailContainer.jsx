import React from 'react'
import datos from '../../assets/datos.json'
import ItemDetail from '../ItemDetail/ItemDetail'
import {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom'
import item from '../Item/Item';


const ItemListContainer = () => {

  const {id} =  useParams()

  const [item, setItem] = useState([])

  useEffect (()=>{
    console.log(id)
    new Promise ((resolve) =>{

        setTimeout(()=>{
          resolve(datos.find(element => element.id == id))
        }, 5000);

    }).then((data)=>{

      setItem(data);
    });

  },[id]);

  return (
    <div className='itemDetailCont'>
      itd
      {/* {productos.filter((item) => item.id === params.id) (<ItemDetail propiedades={item.id}/>)} */}
      { Object.getOwnPropertyNames(item).length && <ItemDetail item={item}/>}
    </div>
  );
};

export default ItemListContainer