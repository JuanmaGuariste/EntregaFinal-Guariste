
import { useContext, useState } from 'react'
import { LoginContext } from '../../context/LoginContext'
import './RegisterScreen.scss'
import { Link, Navigate } from 'react-router-dom'


export const RegisterScreen = () => {
    const { register } = useContext(LoginContext)


    const [values, setValues] = useState({      
        email: '',
        password: ''
    })
    

    const handleSubmit = (e) => { 
        e.preventDefault()
        register(values)        
    }

    const handleInputChange = (e) => {
        setValues({
            ...values,
            [e.target.name]: e.target.value
        })
    }
    
    return (
        <div className='registerScreen'>
            <div className='login'>
                <h2>Registrate</h2>
                <hr/>               
            
                <form onSubmit={handleSubmit}>
                    <input
                        value={values.email}
                        type={'text'}
                        onChange={handleInputChange}
                        placeholder='Email'
                        className='form-control my-2'
                        name="email"
                    />
                    <input
                        value={values.password}
                        type={'password'}
                        onChange={handleInputChange}
                        placeholder='Contraseña'
                        className='form-control my-2'
                        name="password" 
                    />
                    <div className='my-4 mx-3'>
                        <button className="btn btn-primary" type="submit" >Crear usuario</button>
                        <Link to="/login" className="btn btn-primary">Iniciar secion</Link>
                    </div>
                </form>
                
 
            </div>
        </div>
    )
}





// import { useContext, useState } from 'react'
// import { LoginContext } from '../../context/LoginContext'
// import './RegisterScreen.scss'
// import { Link, Navigate } from 'react-router-dom'
// import { Formik, useFormik } from 'formik';
// import * as Yup from 'yup';


// const schema = Yup.object().shape({
//     email: Yup.string()
//                 .email('*El email ingresado no es válido.')
//                 .required('*Este campo es obligatorio.'), 
//     password: Yup.string()
//                 .required('*Este campo es obligatorio.')
//                 .min(8, '*La contraseña debe tener al menos 8 caracteres.')
//                 .max(20, '*La contraseña debe tener como máximo 20 caracteres.')
// })

// export const RegisterScreen = () => {
//     const { register } = useContext(LoginContext)

//     const formik = useFormik()

//     const [values, setValues] = useState({      
//         email: '',
//         password: '',
//     })
    

//     const crearUsuario = () => { 
//         register(values)
//         return <Navigate to="/" />
        
//     }

//     const handleInputChange = (e) => {
//         setValues({
//             ...values,
//             [e.target.name]: e.target.value
//         })
//     }
    
//     return (
//         <div className='registerScreen'>
//             <div className='login'>
//                 <h2>Registrate</h2>
//                 <hr/>

//                 <Formik
//                 initialValues={{
//                     email: '',
//                     password: ''
//                 }}
//                 validationSchema={schema}                
//                 onSubmit={crearUsuario}
//                 //touched={touched}
//             >
//                 {( {values, errors, handleChange, handleSubmit, isSubmitting} ) => (
//                     <form onSubmit={handleSubmit}>
//                         <input
//                             onChange={handleChange}
//                             value={values.email}
//                             type={'email'}
//                             placeholder='Email'
//                             className='form-control my-2'
//                             name="email"
//                             onBlur={formik.handleBlur}                            
//                         />
//                         {formik.touched.email && formik.errors.email ? <small className="alert">{errors.email}</small> : ''}
//                         <input
//                             onChange={handleChange}
//                             value={values.password}
//                             type={'password'}
//                             placeholder='Contraseña'
//                             className='form-control my-2'
//                             name="password" 
//                             onBlur={formik.handleBlur}                           
//                         />
//                         {formik.touched.password && formik.errors.password ? <small className="alert">{errors.password}</small> : ''}
//                         <div className='my-4 mx-3'>
//                             <button className="btn btn-primary" type="submit" disabled={isSubmitting}>Enviar</button>
//                         </div>
//                     </form>
//                 )}                
//             </Formik>
//             </div>
//         </div>
//     )
// }
















// import { useContext } from 'react';
// import { LoginContext } from '../../context/LoginContext';
// import './RegisterScreen.scss';
// import { Formik, useFormik } from 'formik';
// import * as Yup from 'yup';

// const schema = Yup.object().shape({
//     firstName: Yup.string()
//         .required('*Este campo es obligatorio.')
//         .min(2, '*El nombre es demasiado corto.')
//         .max(20, '*El nombre es demasiado largo.'),
//     lastName: Yup.string()
//         .required('*Este campo es obligatorio.')
//         .min(1, '*El apellido es demasiado corto.')
//         .max(20, '*El apellido es demasiado largo.'),
//     email: Yup.string()
//         .email('*El email ingresado no es válido.')
//         .required('*Este campo es obligatorio.'),
//     password: Yup.string()
//         .required('*Este campo es obligatorio.')
//         .min(8, '*La contraseña debe tener al menos 8 caracteres.')
//         .max(20, '*La contraseña debe tener como máximo 20 caracteres.'),
//     address: Yup.string()
//         .required('*Este campo es obligatorio.')
//         .min(3, '*La dirección es demasiado corta.')
//         .max(20, '*La dirección es demasiado larga.')
// });

// export const RegisterScreen = () => {
//     const { register } = useContext(LoginContext);

//     const formik = useFormik({
//         initialValues: {
//             firstName: '',
//             lastName: '',
//             email: '',
//             password: '',
//             address: '',
//             phone: ''
//         },
//         validationSchema: schema,
//         onSubmit: (values, { setSubmitting }) => {
//             register(values);
//             setSubmitting(false);
//         }
//     });

//     return (
//         <div className='registerScreen'>
//             <div className='login'>
//                 <h2>Registrate</h2>
//                 <hr />

//                 <Formik
//                     initialValues={formik.initialValues}
//                     validationSchema={formik.validationSchema}
//                     onSubmit={(values, { setSubmitting }) => {
//                         formik.setSubmitting(true);
//                         register(values);
//                         setSubmitting(false);
//                     }}
//                 >
//                     {(formikProps) => (
//                         <form onSubmit={formikProps.handleSubmit}>
//                             <input
//                                 {...formik.getFieldProps('firstName')}
//                                 type='text'
//                                 placeholder='Tu nombre'
//                                 className='form-control my-2'
//                             />
//                             {formik.touched.firstName && formik.errors.firstName && (
//                                 <small className='alert'>{formik.errors.firstName}</small>
//                             )}
//                             <input
//                                 {...formik.getFieldProps('lastName')}
//                                 type='text'
//                                 placeholder='Tu apellido'
//                                 className='form-control my-2'
//                             />
//                             {formik.touched.lastName && formik.errors.lastName && (
//                                 <small className='alert'>{formik.errors.lastName}</small>
//                             )}
//                             <input
//                                 {...formik.getFieldProps('email')}
//                                 type='email'
//                                 placeholder='Tu email'
//                                 className='form-control my-2'
//                             />
//                             {formik.touched.email && formik.errors.email && (
//                                 <small className='alert'>{formik.errors.email}</small>
//                             )}
//                             <input
//                                 {...formik.getFieldProps('password')}
//                                 type='password'
//                                 placeholder='Tu contraseña'
//                                 className='form-control my-2'
//                             />
//                             {formik.touched.password && formik.errors.password && (
//                                 <small className='alert'>{formik.errors.password}</small>
//                             )}
//                             <input
//                                 {...formik.getFieldProps('phone')}
//                                 type='text'
//                                 placeholder='Tu número celular'
//                                 className='form-control my-2'
//                             />
//                             {formik.touched.phone && formik.errors.phone && (
//                                 <small className='alert'>{formik.errors.phone}</small>
//                             )}
//                             <div className='my-4 mx-3'>
//                                 <button
//                                     className="btn btn-primary boton"
//                                     type="submit"
//                                     disabled={formik.isSubmitting}
//                                 >
//                                     {formikProps.isSubmitting ? 'Enviando...' : 'Enviar'}
//                                 </button>
//                             </div>
//                         </form>
//                     )}
//                 </Formik>
//             </div>
//         </div>
//     )
// }
