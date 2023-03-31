import { useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import { BsFillTrashFill } from "react-icons/bs";
import './Cart.scss'
import { Link } from 'react-router-dom';

export const Cart = () => {

    const { cart, totalCompra, vaciarCarrito, eliminarDelCarrito } = useContext(CartContext)
    
    return (
        <div className="cartContainer">
            <h2>Tu compra</h2>
            <hr />
                <div className="cartList">
                    {
                    cart.map((prod) => (
                        <div className="cardItem" key={prod.id}>
                            <h4>{prod.name}</h4>
                            <img src={prod.img} alt={prod.name} />
                            <div>
                                <small>Precio unitario: ${prod.price}</small>
                                <small>Cantidad: ${prod.cantidad}</small>
                                <p>Precio total: ${prod.price * prod.cantidad}</p>
                                <button
                                    onClick={() => eliminarDelCarrito(prod.id)}
                                    className="btn btn-danger"
                                >
                                    <div className="icon-container">
                                        <BsFillTrashFill/>
                                    </div>
                                    
                                </button>
                            </div>
                            
                        </div>
                    ))                    
                    }
                </div>
            
            <h3>TOTAL: ${totalCompra().toFixed(2)}</h3>
            <button onClick={vaciarCarrito} className="btn btn-danger">Vaciar carrito</button>
            <Link className="btn btn-success" to="/checkout">Terminar mi compra</Link>
        </div>
    )
}
// import { useContext } from 'react'
// import { CartContext } from '../../context/CartContext'
// import { BsFillTrashFill } from "react-icons/bs";
// import './Cart.scss'
// import { Link } from 'react-router-dom';

// export const Cart = () => {

//     const { cart, totalCompra, vaciarCarrito, eliminarDelCarrito } = useContext(CartContext)

//     return (
//         <div className="cartContainer">
//             <h2>Tu compra</h2>
//             <hr />
            
//                 <div className="cartList">
//                     {
//                     cart.map((prod) => (
//                         <div className="cardItem" key={prod.id}>
//                             <h4>{prod.name}</h4>
//                             <img src={prod.img} alt={prod.name} />
//                             <div>
//                                 <small>Precio unitario: ${prod.price}</small>
//                                 <small>Cantidad: ${prod.cantidad}</small>
//                                 <p>Precio total: ${prod.price * prod.cantidad}</p>
//                                 <button
//                                     onClick={() => eliminarDelCarrito(prod.id)}
//                                     className="btn btn-danger"
//                                 >
//                                     <div className="icon-container">
//                                         <BsFillTrashFill/>
//                                     </div>
                                    
//                                 </button>
//                             </div>
                            
//                         </div>
//                     ))                    
//                     }
//                 </div>
            
//             <h3>TOTAL: ${totalCompra().toFixed(2)}</h3>
//             <button onClick={vaciarCarrito} className="btn btn-danger">Vaciar carrito</button>
//             <Link className="btn btn-success" to="/checkout">Terminar mi compra</Link>
//         </div>
//     )
// }