import { useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import { Link } from 'react-router-dom'
import './WishWidget.scss'

export const WishWidget = () => {

    const { totalCantidadFav } = useContext(CartContext)

    // const getStyle = (condicion) => ({
    //     color: condicion ? 'red' : 'blue',
    //     // fontSize: '16px',
    //     // fontWeight: 'bold'
    //   });

    return(
        <Link to="/wish" className="favoritos__contenedor">
            <button type="button" className="fav__button">
                <span className="material-icons md-48">star</span>
                <span className={`${totalCantidadFav() ? ' icon-button__badge' : 'invisible'}`}>{totalCantidadFav()}</span>
            </button>
        </Link>
    )
}



 // ${totalCantidad() ? 'icon-button__badge' : ''}

// style={color: totalCantidad() ? 'red' : 'blue'}

{/* <span className={`icon-button__badge${totalCantidad() ? ' icon-button__badge--visible' : ''}`}>{totalCantidad()}</span> */}