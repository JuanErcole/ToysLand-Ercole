import React, {Children, createContext, useState} from 'react';


export const CartContext = createContext();

export function CartProvider({children}){

  const [items, setItems] = useState();

  function addItems(item, quantity){

    if(isInCart(item.id)){
      let product = item;
      let itemIndex = product.indexOf(element => element.id === item.id);
      product[itemIndex].quantity += quantity;  
      setItems(...product)
    }else {

      setItems([...item, {...item, quantity}])
    };
    
    
  };

  function removeItem(itemID){

  };

  function clear(){
    setItems([]);
  };

  function isInCart(itemID){
    if(!!items){
      return items.some(element => element.id === itemID);
    }else{
      return false;
    };
  };

  return (
    <CartContext.Provider value={{addItems, removeItem, items}}>
     {children}
    </CartContext.Provider>
  )
}


