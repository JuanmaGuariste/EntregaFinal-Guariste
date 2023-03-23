//import logo from './logo.svg';
import './App.css';
import { Navbar } from './Components/Navbar/Navbar';
import { ItemListContainer } from './Components/ItemListContainer/ItemListContainer';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ItemDetailContainer } from './Components/ItemDetailContainer/ItemDetailContainer';
import { CartContext } from './context/CartContext';
import { useState } from 'react';
function App() {

  const [cart, setCart] = useState([])

  const agregarAlCarrito = (item) => {
    setCart([...cart, item])
  }

  const isInCart = (id) => {
    return cart.some((prod) => prod.id === id)
  }

  const totalCantidad = (id) => {
    return cart.reduce((acc, prod) => acc + prod.cantidad, 0)
  }

  return (

    <CartContext.Provider value={{
      cart,
      agregarAlCarrito,
      isInCart,
      totalCantidad
    }}>

      <BrowserRouter>
        <Navbar />

        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/productos" element={<ItemListContainer />} />
          <Route path="/productos/:categoryId" element={<ItemListContainer />} />
          <Route path="/detail/:itemId" element={<ItemDetailContainer />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>

      </BrowserRouter>

    </CartContext.Provider>

  );
}

export default App;