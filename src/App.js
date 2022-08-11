import './App.css';
import NavBar from './components/navBar/NavBar';
import {ItemListContainer} from './components/itemListContainer/itemListContainer'

function App() {
  return (
    <div className="App">
      <NavBar/>
      <ItemListContainer greeting="Bienvendio a Toysland"/>
    </div>
  );
}

export default App;
