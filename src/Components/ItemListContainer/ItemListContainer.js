import './ItemListContainer.scss'
import {useEffect} from 'react'
import {useState} from 'react'
import {pedirDatos} from '../../helpers/pedirDatos'
import { ItemList } from '../ItemList/ItemList';


export const ItemListContainer = () => {
    const [productos, setProductos] = useState([])
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        pedirDatos()
            .then((response) => {
                setProductos(response)                
            })
            .catch((error) => {
                console.log(error)
            })
            .finally(() => {
                setLoading(false)
            })
    }, [])

    return(
        <div className="contenedor">
            {
                loading
                ? <h2>Cargando...</h2>
                : <ItemList items={productos}/>
            }            
        </div>
    )
}