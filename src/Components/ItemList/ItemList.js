import './ItemList.scss'
import { Item } from '../Item/Item';

export const ItemList = ( {items} ) => {
    return (
        <div className="container__itemList" >
            <h2> Productos</h2> 
            <hr></hr>
            <div className='row my-5'>
                { items.map((producto) => <Item  key={producto.id} item={producto}/>)}
            </div>
        </div>
    )
}