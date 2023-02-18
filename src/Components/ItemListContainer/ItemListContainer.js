import './ItemListContainer.scss'

export const ItemListContainer = ({greeting}) => {
    return(
        <div className="contenedor__itemList">            
            <h2>{greeting}</h2>
        </div>    
    )
}