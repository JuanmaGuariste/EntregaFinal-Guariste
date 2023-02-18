import './CartWidget.scss'

export const CartWidget = () => {
    return(
        <div className="carrito__contenedor">
            <button type="button" className="shop__button">
                <span className="material-icons md-48">shopping_cart</span>
                <span className="icon-button__badge">3</span>
            </button>
        </div>
    )
}