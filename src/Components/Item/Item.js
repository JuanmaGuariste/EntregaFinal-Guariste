import { Link } from "react-router-dom"
import './Item.scss'

export const Item = ({item}) => {
    return (        
         <div className='col-3 m-3'>
            <img className="img-prod"src={item.img} alt={item.name}/>
            <div>
                <h4>{item.name}</h4>        
                <p>Precio: <strong>${item.price}</strong></p>
                <Link to={`/detail/${item.id}`} className='btn btn-primary'>Ver más</Link>
            </div>
        </div>       
    )
}