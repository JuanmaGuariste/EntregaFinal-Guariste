import './ItemDetailContainer.scss';
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { pedirProductoPorId } from "../../helpers/pedirDatos"
import { ItemDetail } from "../ItemDetail/ItemDetail"

export const ItemDetailContainer = () => {

    const [item, setItem] = useState(null)
    const [loading, setLoading] = useState(true)
    const {itemId} = useParams()

    useEffect(() => {
        setLoading(true)
        pedirProductoPorId(Number(itemId))
            .then((resp) => {
                setItem(resp)
            })
            .finally(() => {
                setLoading(false)
            })
        }, [itemId])

    return(
        <div className="contenedor">
            {
            loading
                ? <h3>Cargando...</h3>
                : <ItemDetail item={item}/>
            }
        </div>
    )
}