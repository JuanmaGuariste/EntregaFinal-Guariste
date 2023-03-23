import { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { CartContext } from '../../context/CartContext'
import { ItemCount } from '../ItemCount/ItemCount'
import './ItemDetail.scss'

export const ItemDetail = ({ item }) => {

    const {agregarAlCarrito, isInCart} = useContext(CartContext)

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
    }

    return (
        <div className="card">
            <h2>{item.name}</h2> 
            <img src={item.img} alt={item.name} />
            <div className="container">                 
                <p>{item.category}</p>         
                <p>{item.description}</p>                
                <p>Precio: ${item.price}</p>

                

                {
                    isInCart(item.id)
                        ?   <Link to="/cart" className="btn btn-success my-2">Terminar mi compra</Link>
                        // ?   console.log("Está en el carrito")
                        :   <ItemCount 
                                max={item.stock}
                                cantidad={cantidad}
                                setCantidad={setCantidad}
                                handleAgregar={handleAgregar}
                            />
                }

                <button onClick={handleVolver} className="btn btn-primary">Volver</button>
            </div>
        </div>
    )
}

