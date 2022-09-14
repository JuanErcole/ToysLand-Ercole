import './App.css';
import Rutas from './routes/rutas'
import Footer from './components/Footer/Footer';
import { CartProvider, GlobalProvider } from './contex/GlobalProvider';


function App() {


  return (
    <div className="App">
      <GlobalProvider>
        <Rutas/>
      </GlobalProvider>
      <Footer/>
    </div>
  );
}

export default App;
