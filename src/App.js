import './App.css';
import NavBar from './components/navBar/NavBar';
import {HeroContainer} from './components/HeroContainer/HeroContainer'
import {ItemCount} from './components/ItemCount/ItemCount'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'

function App() {

  const onAdd = counter => console.log( `El valor del contador es ${counter}`);

  return (
    <div className="App">
      <NavBar/>
      <HeroContainer greeting="Bienvenido a Toysland"/>
      {/* <ItemCount stock={7} initial={1} onAdd={onAdd}/> */}
      <ItemListContainer/>
      {/* <ItemDetailContainer/> */}
    </div>
  );
}

export default App;
