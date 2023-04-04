import './ItemDetailContainer.scss';
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { ItemDetail } from "../ItemDetail/ItemDetail"
import { db } from '../../firebase/config';
import { doc, getDoc } from "firebase/firestore"
import { LoadingSpinner } from '../LoadingSpinner/LoadingSpinner';

export const ItemDetailContainer = () => {

    const [item, setItem] = useState(null)
    const [loading, setLoading] = useState(true)
    const {itemId} = useParams()

    useEffect(() => {
        setLoading(true)
        const docRef = doc(db, "productos", itemId)

        getDoc(docRef)
        .then((doc) => {
            setItem({
                id: doc.id,
                ...doc.data()
            })
        })
        .finally(() => { setLoading(false) })
        }, [])

    return(
        <div className="contenedor">
            {
            loading
                ? <LoadingSpinner/>
                : <ItemDetail item={item}/>
            }
        </div>
    )
}