import { Link } from "react-router-dom"
import './Item.scss'
import { CartContext } from "../../context/CartContext"
import { useContext } from "react"

export const Item = ({ item }) => {

    const { isInWish, eliminarDeFavoritos, agregarFavoritos } = useContext(CartContext)
    
    const handleFavorito = () => {  

        const newItem = {
            ...item,
            cantidad: 1
        }    

    isInWish(item.id) ? eliminarDeFavoritos(item.id) : agregarFavoritos(newItem);   
    }

    return (
        <div className="card">
            <img src={item.img} alt="Nombre del producto" />
            <div className="card-content">
                <h3>{item.name}</h3>
                <p className="price">Precio: ${item.price}</p>
                <button  onClick={handleFavorito} className="btn btn-outline-primary ">
                    {isInWish(item.id) ? 'Quitar de favoritos' : 'Añadir a favoritos'}
                </button>
                <Link to={`/detail/${item.id}`} className='btn btn-primary'>Ver más</Link>
            </div>
        </div>
    )
}