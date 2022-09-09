import './App.css';
import Rutas from './routes/rutas'
import Footer from './components/Footer/Footer';
import { CartProvider } from './contex/CartContext';


function App() {


  return (
    <div className="App">
      <CartProvider>
        <Rutas/>
      </CartProvider>
      <Footer/>
    </div>
  );
}

export default App;
