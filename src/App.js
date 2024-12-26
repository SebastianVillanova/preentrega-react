import NavBar from './components/navbar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import Carrito from './components/Carrito/Carrito';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Carrito/>
      <ItemListContainer saludo={"Bienvenido"} />
    </div>
  );
}

export default App;