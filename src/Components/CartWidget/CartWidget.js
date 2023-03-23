import { useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import './CartWidget.scss'

export const CartWidget = () => {

    const { totalCantidad } = useContext(CartContext)

    return(
        <div className="carrito__contenedor">
            <button type="button" className="shop__button">
                <span className="material-icons md-48">shopping_cart</span>
                <span className="icon-button__badge">{totalCantidad()}</span>
            </button>
        </div>
    )
}