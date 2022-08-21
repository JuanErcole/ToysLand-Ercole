import './App.css';
import NavBar from './components/navBar/NavBar';
import {HeroContainer} from './components/HeroContainer/HeroContainer'
import {ItemCount} from './components/ItemCount/ItemCount'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'


function App() {

  const onAdd = counter => console.log( `El valor del contador es ${counter}`);

  return (
    <div className="App">
      <NavBar/>
      <HeroContainer greeting="Bienvenido a Toysland"/>
      {/* <ItemCount stock={7} initial={1} onAdd={onAdd}/> */}
      <ItemListContainer/>
    </div>
  );
}

export default App;
