import React from 'react'
import datos from '../../assets/datos.json'
import ItemDetail from '../ItemDetail/ItemDetail'
import {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom'


const ItemListContainer = () => {

  const {id} =  useParams();

  const [item, setItem] = useState([]);

  useEffect (()=>{
    console.log(id)
    new Promise ((resolve) =>{

        setTimeout(()=>{
          resolve(datos.find(element => element.id == id))
        }, 1000);

    }).then((data)=>{

      setItem(data);
    });

  },[id]);

  return (
    <div className='itemDetailCont'>
      { <ItemDetail item={item}/> }
    </div>
  );
};

export default ItemListContainer