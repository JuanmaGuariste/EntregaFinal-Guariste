import { createContext, useEffect, useState } from "react";

export const CartContext = createContext();

const initCart = JSON.parse(localStorage.getItem('carrito')) || []

const initWish = JSON.parse(localStorage.getItem('favoritos')) || []

export const CartProvider = ({ children }) => {

    const [cart, setCart] = useState(initCart)

    const [wish, setWish] = useState(initWish)

    const agregarFavoritos = (item) => {
        setWish([...wish, item])
    }
    const agregarAlCarrito = (item) => {
        setCart([...cart, item])
    }

    const isInCart = (id) => {
        return cart.some((prod) => prod.id === id)
    }
    const isInWish = (id) => {
        return wish.some((prod) => prod.id === id)
    }

    const totalCantidad = () => {
        return cart.reduce((acc, prod) => acc + prod.cantidad, 0)
    }
    const totalCantidadFav = () => {
        return wish.reduce((acc, prod) => acc + prod.cantidad, 0)
    }

    const totalCompra = () => {
        return cart.reduce((acc, prod) => acc + prod.price * prod.cantidad, 0)
    }

    const vaciarCarrito = () => {
        return setCart([])
    }
    const vaciarListaFavoritos = () => {
        return setWish([])
    }

    const eliminarDelCarrito = (id) => {
        setCart(cart.filter((prod) => prod.id !== id))
    }

    const eliminarDeFavoritos = (id) => {
        setWish(wish.filter((prod) => prod.id !== id))
    }

    useEffect(() => {
        localStorage.setItem('carrito', JSON.stringify(cart))
    }, [cart])

    useEffect(() => {
        localStorage.setItem('favoritos', JSON.stringify(wish))
    }, [wish])

    return (
        <CartContext.Provider value={{
            cart,
            agregarAlCarrito,
            isInCart,
            totalCantidad,
            totalCompra,
            vaciarCarrito,
            eliminarDelCarrito,
            agregarFavoritos,
            eliminarDeFavoritos,
            totalCantidadFav,
            isInWish,
            wish,
            vaciarListaFavoritos
        }}>
            {children}
        </CartContext.Provider>
    )
}