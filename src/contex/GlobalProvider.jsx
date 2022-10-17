import React, { createContext, useState } from 'react';


export const CartContext = createContext();

export function GlobalProvider({children}){

  const [items, setItems] = useState([]);

  function addItems(item, quantity){

    setItems([...items, {...item, quantity}]);

    if(isInCart(item.id)){
      let product = item;
      let itemIndex = product.indexOf(element => element.id === item.id);
      product[itemIndex].quantity += quantity;  
      setItems([...product, {...item, quantity}])
    }else {

      setItems([...item, {item, quantity}])
    };
  };

  const deleteItem = itemId => setItems(items.filter(el=>el.id !== itemId)); 
  

  function clear(){
    setItems([]);
  };

  const isInCart = (itemId)=> items.find(el=> el.id === itemId)
  /* function isInCart(itemID){
    if(!!items){
      return items.some(element => element.id === itemID);
    }else{
      return false;
    };
  }; */

  let precioFinal =  items.reduce((acc,item)=>acc + item.price * item.quantity,0)

  return (
    <CartContext.Provider value={{addItems, deleteItem, items, clear, precioFinal}}>
     {children}
    </CartContext.Provider>
  )
}


