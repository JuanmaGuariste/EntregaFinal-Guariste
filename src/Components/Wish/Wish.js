import { useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import { BsFillTrashFill } from "react-icons/bs";
import './Wish.scss'
import { Link, useNavigate } from 'react-router-dom';

export const Wish = () => {
    const { cart, totalCompra, vaciarCarrito, vaciarListaFavoritos, wish, eliminarDeFavoritos, agregarAlCarrito } = useContext(CartContext)    

    const navigate = useNavigate()

    const handleVolver = () => {
        navigate(-1);
    }

    // const { Wish } = useContext(CartContext)
    return (
        <div className="cartContainer">
            <h2 className="titulo">Favoritos</h2>
            <hr />
                <div className="cartList">
                    {
                    wish.map((prod) => (
                        <div className="cardItem" key={prod.id}>
                            {/* <div className="columna-imagen">
                                <img src={prod.img} alt={prod.name} />
                            </div> */}
                            <div className='columna-contenido'>
                                <h2>{prod.name}</h2>
                                <small>Precio: ${prod.price.toFixed(2)}</small>
                                {/* <small>Cantidad: {prod.cantidad}</small> */}
                                <div>
                                    {/* <p className="total">Precio total: ${(prod.price * prod.cantidad).toFixed(2)}</p> */}
                                    <button
                                        onClick={() => eliminarDeFavoritos(prod.id)}
                                        className="clearBtn  btn btn-danger"
                                    >
                                        <div className="icon-container">
                                            <BsFillTrashFill/>
                                        </div>                                        
                                    </button>
                                    <Link to={`/detail/${prod.id}`} className='btn btn-primary boton'>Ver detalle</Link>
                                    {/* <button onClick={handleAgregar(prod)} className="btn btn-success ">Agregar al carrito</button> */}
                                    {/* <button onClick={handleAgregar} className="btn btn-success ">Agregar al carrito</button> */}
                                </div>

                            </div>
                            
                        </div>
                    ))                    
                    }
                </div>              
            <hr/>
            <div className='botones'>
                <button onClick={vaciarListaFavoritos} className="btn-vaciarCarrito btn btn-danger">Vaciar lista de favoritos</button>
                {/* <Link className="btn btn-success mx-5" to="/checkout">Terminar mi compra</Link> */}
                <button onClick={handleVolver} className="btn btn-primary  btn-volver mx-5">Volver</button>

            </div>
        </div>
    )
}