import { collection, addDoc, writeBatch, documentId, getDocs, where, query } from 'firebase/firestore'
import { useContext, useState } from 'react'
import { Link, Navigate } from 'react-router-dom'
import { CartContext } from '../../context/CartContext'
import { db } from '../../firebase/config'
import { Formik } from 'formik';
import * as Yup from 'yup';
import { LoginContext } from '../../context/LoginContext'
import './Checkout.scss'
import Swal from 'sweetalert2'

const schema = Yup.object().shape({
    nombre: Yup.string()
        .required('*Este campo es obligatorio.')
        .min(2, '*Ingrese al menos 2 caracteres.')
        .max(20, '*El nombre debe contener menos de 20 caracteres.'),
    apellido: Yup.string()
        .required('*Este campo es obligatorio.')
        .min(2, '*Ingrese al menos 2 caracteres.')
        .max(20, '*El apellido debe contener menos de 20 caracteres.'),
    direccion: Yup.string()
        .required('*Este campo es obligatorio.')
        .min(2, '*Ingrese al menos 2 caracteres.')
        .max(20, '*La dirección debe contener menos de 20 caracteres.'),
})

export const Checkout = () => {

    const showErrorAlert = () => {
        Swal.fire({
            icon: 'error',
            title: 'Lo sentimos',
            text: 'Algunos productos no tienen suficiente stock!',
            theme: 'dark'
        })
    }

    const showOkAdvice = () => {
        Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Tu orden se registró con éxito',
            showConfirmButton: false,
            timer: 1500
        })
    }

    const { cart, totalCompra, vaciarCarrito } = useContext(CartContext)

    const { user } = useContext(LoginContext)

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
            showOkAdvice()
        } else {          
            showErrorAlert()
        }
    }

    if (orderId) {
        return (
            <div className='container my-5'>
                <h2 className="checkout">Tu orden se registró con éxito</h2>
                <hr />
                <p>Guarda tu número de orden: <span className="numeroOrden">{orderId}</span></p>
                <hr className="divisorInferior" />
                <Link className='btn btn-primary my-3 boton' to="/">Volver al inicio</Link>
            </div>
        )
    }

    if (cart.length === 0) {
        return <Navigate to="/" />
    }
    return (
        <div className="checkoutScreen">
            <div className="checkContainer">
                <h2 className="checkout">Checkout</h2>
                <hr />
                <p className="user">Usuario: {user.email}</p>
                <hr />
                <Formik
                    initialValues={{
                        nombre: '',
                        apellido: '',
                        direccion: '',
                        telefono: '',
                        touched: {
                            nombre: false,
                            apellido: false,
                            direccion: false,
                            telefono: false
                        }
                    }}
                    validationSchema={schema}
                    onSubmit={generarOrden}
                >
                    {({ values, errors, handleChange, handleSubmit, isSubmitting, handleBlur, touched }) => (
                        <form onSubmit={handleSubmit}>
                            <input
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.nombre}
                                type={'text'}
                                placeholder='Nombre'
                                className='form-control my-2'
                                name="nombre"
                            />
                            {errors.nombre && touched.nombre && <small className="error-msg">{errors.nombre}</small>}
                            <input
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.apellido}
                                type={'text'}
                                placeholder='Apellido'
                                className='form-control my-2'
                                name="apellido"
                            />
                            {errors.apellido && touched.apellido && <small className="error-msg">{errors.apellido}</small>}
                            <input
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.direccion}
                                type={'text'}
                                placeholder='Direccion'
                                className='form-control my-2'
                                name="direccion"
                            />
                            {errors.direccion && touched.direccion && <small className="error-msg">{errors.direccion}</small>}
                            <input
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.telefono}
                                type={'tel'}
                                placeholder='Telefono (opcional)'
                                className='form-control my-2'
                                name="telefono"
                            />
                            <div className='my-4 mx-3'>
                                <button className="btn btn-primary boton" type="submit" disabled={isSubmitting}>Enviar</button>
                            </div>
                        </form>
                    )}
                </Formik>
            </div>
        </div>
    )
}