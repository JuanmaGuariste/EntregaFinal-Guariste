
import { useContext, useState } from 'react'
import { LoginContext } from '../../context/LoginContext'
import './RegisterScreen.scss'
import { Link, Navigate } from 'react-router-dom'
import { Formik } from 'formik';
import * as Yup from 'yup';



const schema = Yup.object().shape({
    email: Yup.string()
        .required('*Este campo es obligatorio.')
        .email(),
        // .min(2, '*Ingrese al menos 2 caracteres.')
        // .max(20, '*El nombre debe contener menos de 20 caracteres.'),
    password: Yup.string()
        .required('*Este campo es obligatorio.')
        .min(2, '*Ingrese al menos 2 caracteres.')
        .max(20, '*El apellido debe contener menos de 20 caracteres.'),
})

export const RegisterScreen = () => {
    const { register } = useContext(LoginContext)


    const [values, setValues] = useState({      
        email: '',
        password: ''
    })    


    const registrarse = ({ email, password }) => { 
        register({ email, password })        
    }



    // const handleInputChange = (e) => {
    //     setValues({
    //         ...values,
    //         [e.target.name]: e.target.value
    //     })
    // }
    
    return (
        <div className='registerScreen'>
            <div className='login'>
                <h2>Registrate</h2>
                <hr/>     
                <Formik
                    initialValues={{
                        email: '',
                        password: '',                    
                        touched: {
                            email: false,
                            password: false                        
                        }
                    }}
                    validationSchema={schema}
                    onSubmit={registrarse}
                >          
                    {({ values, errors, handleChange, handleSubmit, isSubmitting, setUserData, handleBlur, touched }) => (
                        <form onSubmit={handleSubmit}>
                            <input
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.email}
                                type={'text'}
                                placeholder='Email'
                                className='form-control my-2'
                                name="email"
                            />
                            {errors.email && touched.email && <small className="alert">{errors.email}</small>}

                            <input
                                onChange={handleChange}
                                // onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.password}
                                type={'password'}
                                placeholder='Contraseña'
                                className='form-control my-2'
                                name="password"
                            />
                            {errors.password && touched.password && <small className="alert">{errors.password}</small>}

                            <div className='my-4 mx-3'>
                                <button className="btn btn-primary boton" type="submit" >Crear usuario</button>
                                <Link to="/login" className="btn btn-primary boton">Iniciar seción</Link>
                            </div>
                        </form>
                    )}
                </Formik>            
            </div>
        </div>
    )
}






// import { useContext, useState } from 'react'
// import { LoginContext } from '../../context/LoginContext'
// import './RegisterScreen.scss'
// import { Link, Navigate } from 'react-router-dom'


// export const RegisterScreen = () => {
//     const { register } = useContext(LoginContext)


//     const [values, setValues] = useState({      
//         email: '',
//         password: ''
//     })
    

//     const handleSubmit = (e) => { 
//         e.preventDefault()
//         register(values)        
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
            
//                 <form onSubmit={handleSubmit}>
//                     <input
//                         value={values.email}
//                         type={'text'}
//                         onChange={handleInputChange}
//                         placeholder='Email'
//                         className='form-control my-2'
//                         name="email"
//                     />
//                     <input
//                         value={values.password}
//                         type={'password'}
//                         onChange={handleInputChange}
//                         placeholder='Contraseña'
//                         className='form-control my-2'
//                         name="password" 
//                     />
//                     <div className='my-4 mx-3'>
//                         <button className="btn btn-primary" type="submit" >Crear usuario</button>
//                         <Link to="/login" className="btn btn-primary">Iniciar secion</Link>
//                     </div>
//                 </form>
                
 
//             </div>
//         </div>
//     )
// }



