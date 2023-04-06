import { useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import { BsFillTrashFill } from "react-icons/bs";
import './Cart.scss'
import { Link } from 'react-router-dom';

export const Cart = () => {

    const { cart, totalCompra, vaciarCarrito, eliminarDelCarrito } = useContext(CartContext)
    
    return (
        <div className="cartContainer">
            <h2 className="titulo">Tu compra</h2>
            <hr />
                <div className="cartList">
                    {
                    cart.map((prod) => (
                        <div className="cardItem" key={prod.id}>
                            <div className='columna-contenido'>
                                <h2>{prod.name}</h2>
                                <small>Precio unitario: ${prod.price.toFixed(2)}</small>
                                <small>Cantidad: {prod.cantidad}</small>
                                <div>
                                    <p className="total">Precio total: ${(prod.price * prod.cantidad).toFixed(2)}</p>
                                    <button
                                        onClick={() => eliminarDelCarrito(prod.id)}
                                        className="clearBtn btn btn-danger"
                                    >
                                        <div className="icon-container">
                                            <BsFillTrashFill/>
                                        </div>                                        
                                    </button>
                                    <Link to={`/detail/${prod.id}`} className='btn btn-primary boton'>Ver detalle</Link>
                                </div>
                            </div>                            
                        </div>
                    ))                    
                    }
                </div>              
            <hr/>
            <h3>TOTAL: ${totalCompra().toFixed(2)}</h3>
            <hr/>
            <div className='botones'>
                <button onClick={vaciarCarrito} className="btn-vaciarCarrito btn btn-danger">Vaciar carrito</button>
                <Link className="btn btn-success mx-5" to="/checkout">Terminar mi compra</Link>
            </div>
        </div>
    )
}