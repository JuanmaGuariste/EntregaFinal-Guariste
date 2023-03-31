import { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { CartContext } from '../../context/CartContext'
import { ItemCount } from '../ItemCount/ItemCount'
import './ItemDetail.scss'

export const ItemDetail = ({ item }) => {

    const { agregarAlCarrito, isInCart } = useContext(CartContext)

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
                        ?   <div>
                                <Link to="/cart" className="btn btn-success mx-5 my-4">
                                    Terminar mi compra
                                </Link>
                                <button onClick={handleVolver} className="btn btn-primary  btn-volver">
                                    Volver
                                </button>
                            </div>
                        
                        :   <ItemCount 
                                max={item.stock}
                                cantidad={cantidad}
                                setCantidad={setCantidad}
                                handleAgregar={handleAgregar}
                            />
                }
                {/* <button onClick={handleVolver} className="btn btn-primary  btn-volver">Volver</button>            */}
            </div>                
        </div> 
    )

    //     <div className="card">            
    //         <img src={item.img} alt={item.name} />
    //         <div className="container">      
    //             <h2>{item.name}</h2> 
    //             <br/>           
    //             <p>{item.category}</p>         
    //             <p>{item.description}</p>                
    //             <p>Precio: ${item.price}</p>               

    //             {
    //                 isInCart(item.id)
    //                     ?   <Link to="/cart" className="btn btn-success my-2">Terminar mi compra</Link>
    //                     // ?   console.log("Está en el carrito")
    //                     :   <ItemCount 
    //                             max={item.stock}
    //                             cantidad={cantidad}
    //                             setCantidad={setCantidad}
    //                             handleAgregar={handleAgregar}
    //                         />
    //             }

    //             <button onClick={handleVolver} className="btn btn-primary">Volver</button>
    //         </div>
    //     </div>
     

    // return (
    //     <div className="card">
    //         <h2>{item.name}</h2> 
    //         <img src={item.img} alt={item.name} />
    //         <div className="container">                 
    //             <p>{item.category}</p>         
    //             <p>{item.description}</p>                
    //             <p>Precio: ${item.price}</p>               

    //             {
    //                 isInCart(item.id)
    //                     ?   <Link to="/cart" className="btn btn-success my-2">Terminar mi compra</Link>
    //                     // ?   console.log("Está en el carrito")
    //                     :   <ItemCount 
    //                             max={item.stock}
    //                             cantidad={cantidad}
    //                             setCantidad={setCantidad}
    //                             handleAgregar={handleAgregar}
    //                         />
    //             }

    //             <button onClick={handleVolver} className="btn btn-primary">Volver</button>
    //         </div>
    //     </div>
    // )
}

