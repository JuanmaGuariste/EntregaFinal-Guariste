//import logo from './logo.svg';
import './App.css';
import { Navbar } from './Components/Navbar/Navbar';
import { ItemListContainer } from './Components/ItemListContainer/ItemListContainer';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div>
      <Navbar />
      <ItemListContainer greeting="Bienvenido a UpSoon"/>
    </div>
  );
}

export default App;