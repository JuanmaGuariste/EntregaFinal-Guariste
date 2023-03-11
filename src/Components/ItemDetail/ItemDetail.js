import { useNavigate } from 'react-router-dom'
import './ItemDetail.scss'

export const ItemDetail = ({ item }) => {
    const navigate = useNavigate()

    const handleVolver = () => {
        navigate(-1);
    }

    return (
        <div className="card">
            <h2>{item.name}</h2> 
            <img src={item.img} alt={item.name} />
            <div className="container">                 
                <p>{item.category}</p>         
                <p>{item.description}</p>                
                <p>Precio: ${item.price}</p>
                <button onClick={handleVolver} className="btn btn-primary">Volver</button>
            </div>
        </div>
    )
}