import './Checkout.scss'
import { collection, addDoc, writeBatch, documentId, getDocs, where, query } from 'firebase/firestore'
import { useContext, useEffect, useState } from 'react'
import { Link, Navigate } from 'react-router-dom'
import { CartContext } from '../../context/CartContext'
import { db, auth } from '../../firebase/config'
import { Formik } from 'formik';
import * as Yup from 'yup';

const schema = Yup.object().shape({
    nombre: Yup.string()
        .required('*Este campo es obligatorio.')
        .min(4, '*Ingrese un nombre de más de 4 caracteres.')
        .max(20, '*El nombre debe contener menos de 20 caracteres.'),
    direccion: Yup.string()
        .required('*Este campo es obligatorio.')
        .min(3, '*Ingrese una direccion de más de 3 caracteres.')
        .max(20, '*La dirección debe contener menos de 20 caracteres.'),
    email: Yup.string()
        .email('*El email ingresado no es válido.')
        .required('*Este campo es obligatorio.')
})

export const Checkout = () => {
    const { cart, totalCompra, vaciarCarrito } = useContext(CartContext)
    const [user, setUser] = useState(null);

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((user) => {
            setUser(user);
        });

        return unsubscribe;
      }, []);

        const [orderId, setOrderId] = useState(null)

        const generarOrden = async (values) => {

            const orden = {
                cliente: values,
                items: cart.map((prod) => ({ id: prod.id, name: prod.name, price: prod.price, cantidad: prod.cantidad })),
                total: totalCompra(),
                fecha: new Date()
            }


            const batch = writeBatch(db)

            const ordersRef = collection(db, 'orders')
            const productosRef = collection(db, "productos")

            const outOfStock = []

            const itemRef = query(productosRef, where(documentId(), 'in', cart.map(prod => prod.id)))

            const response = await getDocs(itemRef)

            response.docs.forEach((doc) => {
                const item = cart.find(prod => prod.id === doc.id)

                if (doc.data().stock >= item.cantidad) {
                    batch.update(doc.ref, {
                        stock: doc.data().stock - item.cantidad
                    })
                } else {
                    outOfStock.push(item)
                }
            })

            if (outOfStock.length === 0) {
                await batch.commit()
                addDoc(ordersRef, orden)
                    .then((doc) => {
                        setOrderId(doc.id)
                        vaciarCarrito()
                    })
            } else {
                alert("Items sin stock")
            }


        }

        if (orderId) {

            return (
                <div className='container my-5'>
                    <h2>Tu orden se registró con éxito</h2>
                    <hr />
                    <p>Guarda tu orden: {orderId}</p>
                    {/* <hr />

                    <h2>Detalle de la compra: </h2>
                    <p>Usuario logueado: {user.displayName}</p>
                    
                    <p>Direccion: {user.address}</p> */}
                    <hr />
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
                <p>Comprar como: {user.displayName}</p>

                <hr />


                <Formik
                    initialValues={{
                        nombre: '',
                        direccion: '',
                        email: ''
                    }}
                    validationSchema={schema}
                    onSubmit={generarOrden}
                >
                    {({ values, errors, handleChange, handleSubmit, isSubmitting }) => (
                        <form onSubmit={handleSubmit}>
                            <input
                                onChange={handleChange}
                                value={values.nombre}
                                type={'text'}
                                placeholder='Tu nombre'
                                className='form-control my-2'
                                name="nombre"
                            />
                            {errors.nombre && <small className="alert">{errors.nombre}</small>}
                            <input
                                onChange={handleChange}
                                value={values.direccion}
                                type={'text'}
                                placeholder='Dirección'
                                className='form-control my-2'
                                name="direccion"
                            />
                            {errors.direccion && <small className="alert">{errors.direccion}</small>}
                            <input
                                onChange={handleChange}
                                value={values.email}
                                type={'email'}
                                placeholder='Tu email'
                                className='form-control my-2'
                                name="email"
                            />
                            {errors.email && <small className="alert">{errors.email}</small>}
                            <div className='my-4 mx-3'>
                                <button className="btn btn-primary" type="submit" disabled={isSubmitting}>Enviar</button>
                            </div>
                        </form>
                    )}
                </Formik>

            </div>

        )
    }