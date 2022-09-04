import './App.css';
import Rutas from './routes/rutas'
import Footer from './components/Footer/Footer';

function App() {


  return (
    <div className="App">
      <Rutas/>
      {/* <ItemCount stock={7} initial={1} onAdd={onAdd}/> */}
      {/* <ItemListContainer/> */}
      {/* <ItemDetailContainer/> */}
      <Footer/>
    </div>
  );
}

export default App;
