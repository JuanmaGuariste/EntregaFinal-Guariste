import { useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import { BsFillTrashFill } from "react-icons/bs";
import './Wish.scss'
import { Link, useNavigate } from 'react-router-dom';

export const Wish = () => {
    const { vaciarListaFavoritos, wish, eliminarDeFavoritos } = useContext(CartContext)

    const navigate = useNavigate()

    const handleVolver = () => {
        navigate(-1);
    }

    return (
        <div className="cartContainer">
            <h2 className="titulo">Favoritos</h2>
            <hr />
            <div className="cartList">
                {
                    wish.map((prod) => (
                        <div className="cardItem" key={prod.id}> 
                            <div className='columna-contenido'>
                                <h2>{prod.name}</h2>
                                <small>Precio: ${prod.price.toFixed(2)}</small>
                                <div>
                                    <button
                                        onClick={() => eliminarDeFavoritos(prod.id)}
                                        className="clearBtn  btn btn-danger"
                                    >
                                        <div className="icon-container">
                                            <BsFillTrashFill />
                                        </div>
                                    </button>
                                    <Link to={`/detail/${prod.id}`} className='btn btn-primary boton'>Ver detalle</Link>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
            <hr />
            <div className='botones'>
                <button onClick={vaciarListaFavoritos} className="btn-vaciarCarrito btn btn-danger">Vaciar lista de favoritos</button>
                <button onClick={handleVolver} className="btn btn-primary  btn-volver mx-5">Volver</button>
            </div>
        </div>
    )
}