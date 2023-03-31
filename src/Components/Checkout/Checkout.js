import './Checkout.scss'
import { collection, addDoc, updateDoc, getDoc, doc } from 'firebase/firestore'
import { useContext, useState } from 'react'
import { Link, Navigate } from 'react-router-dom'
import { CartContext } from '../../context/CartContext'
import { db } from '../../firebase/config'

export const Checkout = () => {
    const { cart, totalCompra, vaciarCarrito } = useContext(CartContext)

    const [values, setValues] = useState({
        nombre: '',
        direccion: '',
        email: ''
    })

     const [ orderId, setOrderId ] = useState(null)

    const handleInputChange = (e) => {
        setValues({
            ...values,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        if (values.nombre.length < 3) {
            alert("Nombre inválido. Ingrese un nombre con más de 3 caracteres")
            return
        }
        if (values.direccion.length < 3) {
            alert("Dirección inválida. Ingrese una dirección con más de 3 caracteres")
            return
        }
        if (values.email.length < 5) {
            alert("Email inválido. Ingrese un email con más de 3 caracteres")
            return
        }

        const orden = {
            cliente: values,
            items: cart.map((prod) => ({ id: prod.id, name: prod.name, price: prod.price, cantidad: prod.cantidad })),
            total: totalCompra(),
            fecha: new Date()
        }

        const productosRef = collection(db, "productos")

        cart.forEach((item) => {
            const docRef = doc(productosRef, item.id)

            getDoc(docRef)
                .then((doc) => {
                    if (doc.data().stock >= item.cantidad){
                        updateDoc(docRef, {
                            stock: doc.data().stock - item.cantidad
                        })
                    } else {
                        alert("No hay stock de " + item.name)
                    }
                })
        })

        const ordersRef = collection(db, 'orders')

        // addDoc(ordersRef, orden)
        //     .then((doc) => {
        //         setOrderId(doc.id)
        //         vaciarCarrito()
        //     })
           
    }
    
    if (orderId) {        
        return (            
            <div className='container my-5'>
                <h2>Tu orden se registró con éxito</h2>
                <hr/>
                <p>Guarda tu orden: {orderId}</p>
                <Link className='btn btn-primary my-3' to="/">Volver al inicio</Link>
            </div>
        )
    }

    if (cart.length === 0) {
        return <Navigate to="/" />
    }

    return (
        <div className="container my-5">
            <h2>Checkout</h2>
            <hr />

            <form onSubmit={handleSubmit}>
                <input
                    onChange={handleInputChange}
                    value={values.nombre}
                    type={'text'}
                    placeholder='Tu nombre'
                    className='form-control my-2'
                    name="nombre"
                />
                <input
                    onChange={handleInputChange}
                    value={values.direccion}
                    type={'text'}
                    placeholder='Dirección'
                    className='form-control my-2'
                    name="direccion"
                />
                <input
                    onChange={handleInputChange}
                    value={values.email}
                    type={'email'}
                    placeholder='Tu email'
                    className='form-control my-2'
                    name="email"
                />
                <button className="btn btn-primary" type="submit">Enviar</button>
            </form>
        </div>

    )
}