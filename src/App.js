//import logo from './logo.svg';
import './App.css';
import { Navbar } from './Components/Navbar/Navbar';
import { ItemListContainer } from './Components/ItemListContainer/ItemListContainer';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={ <ItemListContainer/> }/>    
        <Route path="*" element={ <Navigate to="/"/> }/>           


      </Routes>
      
    </BrowserRouter>
  );
}

export default App;