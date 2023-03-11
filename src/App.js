//import logo from './logo.svg';
import './App.css';
import { Navbar } from './Components/Navbar/Navbar';
import { ItemListContainer } from './Components/ItemListContainer/ItemListContainer';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ItemDetailContainer } from './Components/ItemDetailContainer/ItemDetailContainer';

function App() {

  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={ <ItemListContainer/> }/>    
        <Route path="/productos" element={ <ItemListContainer/> }/> 
        <Route path="/productos/:categoryId" element={ <ItemListContainer/> }/>  
        <Route path="/detail/:itemId" element={ <ItemDetailContainer/> }/> 
        <Route path="*" element={ <Navigate to="/"/> }/>           


      </Routes>
      
    </BrowserRouter>
  );
}

export default App;