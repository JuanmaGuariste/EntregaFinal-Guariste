import './ItemListContainer.scss'
import { useEffect } from 'react'
import { useState } from 'react'
import { ItemList } from '../ItemList/ItemList';
import { useParams } from 'react-router-dom';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { db } from '../../firebase/config';
import { LoadingSpinner } from '../LoadingSpinner/LoadingSpinner';

export const ItemListContainer = () => {

    const [productos, setProductos] = useState([])
    const [loading, setLoading] = useState(true)
    const { categoryId } = useParams()

    useEffect(() => {
        setLoading(true)
        const productoRef = collection(db, "productos")
        const q = categoryId
            ? query(productoRef, where("category", "==", categoryId))
            : productoRef
        getDocs(q)
            .then((res) => {
                const docs = res.docs.map((doc) => {
                    return {
                        ...doc.data(),
                        id: doc.id
                    }
                })
                setProductos(docs)
            })
            .finally(() => {
                setLoading(false)
            })
    }, [categoryId])

    return (
        <div className="contenedor">
            {
                loading
                    ? <LoadingSpinner />
                    : <ItemList items={productos} />
            }
        </div>
    )
}