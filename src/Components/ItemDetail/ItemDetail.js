import { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { CartContext } from '../../context/CartContext'
import { ItemCount } from '../ItemCount/ItemCount'
import './ItemDetail.scss'

export const ItemDetail = ({ item }) => {

    const { agregarAlCarrito, isInCart, agregarFavoritos, isInWish, eliminarDeFavoritos } = useContext(CartContext)

    const [cantidad, setCantidad] = useState(1)

    const navigate = useNavigate()

    const handleVolver = () => {
        navigate(-1);
    }

    const handleAgregar = () => {
        const newItem = {
            ...item,
            cantidad
        }
        agregarAlCarrito(newItem)
        eliminarDeFavoritos(item.id)
    }
    const handleFavorito = () => {        
        const newItem = {
            ...item,
            cantidad: 1
        }

        isInWish(item.id) ? eliminarDeFavoritos(item.id) : agregarFavoritos(newItem);
    }

    return (
        <div className='tarjeta'>
            <div className='columna-imagen'>
                <img src={item.img} alt={item.name} />
            </div>
            <div className='columna-contenido'>
                <h2>{item.name}</h2>
                <p>{item.category}</p>
                <p>{item.description}</p>
                <p>Precio: ${item.price}</p>
                {
                    isInCart(item.id)
                        ? <div>
                            <Link to="/cart" className="btn btn-success mx-5 my-4">
                                Terminar mi compra
                            </Link>
                            <button onClick={handleVolver} className="btn btn-primary btn-volver">
                                Volver
                            </button>
                        </div>

                        : <ItemCount
                            max={item.stock}
                            cantidad={cantidad}
                            setCantidad={setCantidad}
                            handleAgregar={handleAgregar}
                            handleFavorito={handleFavorito}
                            id={item.id}
                        />
                }
            </div>
        </div>
    )
}

