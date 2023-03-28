import {useNavigate } from 'react-router-dom'
import './ItemCount.scss'

export const ItemCount = ({max, cantidad, setCantidad, handleAgregar}) => {

    const handleSumar = () => {
        cantidad < max && setCantidad(cantidad + 1)
    }
    const handleRestar = () => {
        cantidad > 1 && setCantidad(cantidad - 1)
    }
    const navigate = useNavigate()

    const handleVolver = () => {
        navigate(-1);
    }

    return (
        <div className="accionesUsuario">
            <div className="accionesCompra">
                <button onClick={handleRestar} className="btn btn-outline-primary">-</button>
                <span className="mx-2">{cantidad}</span>
                <button onClick={handleSumar} className="btn btn-primary">+</button>                
            </div>   
            <button onClick={handleAgregar} className="btn btn-success ">Agregar al carrito</button>    
            <button onClick={handleVolver} className="btn btn-primary  btn-volver">Volver</button>         
        </div>
    )
}