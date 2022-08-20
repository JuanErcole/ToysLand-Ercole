import './App.css';
import NavBar from './components/navBar/NavBar';
import {ItemListContainer} from './components/itemListContainer/itemListContainer'
import {ItemCount} from './components/ItemCount/ItemCount'

function App() {

  const onAdd = counter => console.log( `El valor del contador es ${counter}`);

  return (
    <div className="App">
      <NavBar/>
      <ItemListContainer greeting="Bienvenido a Toysland"/>
      <ItemCount stock={7} initial={1} onAdd={onAdd}/>
    </div>
  );
}

export default App;
