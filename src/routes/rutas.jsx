import React from 'react'
import { BrowserRouter, Routes, Route} from 'react-router-dom' /*imrb */
import { HeroContainer } from '../components/HeroContainer/HeroContainer'
import ItemDetailContainer from '../components/ItemDetailContainer/ItemDetailContainer'
import ItemDetail from '../components/ItemDetail/ItemDetail'
import NavBar from '../components/navBar/NavBar'
import ItemListContainer from '../components/ItemListContainer/ItemListContainer'

const rutas = () => {
  return (
    <BrowserRouter>
      <NavBar/>
      <HeroContainer greeting="Bienvenido a Toysland"/>
      <Routes>
        <Route path='/' element={<ItemListContainer/>}/>
        <Route path='/Item/:id' element={<ItemDetailContainer/>}/>
        <Route path='/category/:categoryid' element={<ItemListContainer/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default rutas