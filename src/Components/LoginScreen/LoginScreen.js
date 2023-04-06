import { useContext } from 'react'
import { LoginContext } from '../../context/LoginContext'
import './LoginScreen.scss'
import { Link } from 'react-router-dom'
import { Formik } from 'formik';
import * as Yup from 'yup';

const schema = Yup.object().shape({
    email: Yup.string()
        .required('*Este campo es obligatorio.'),
    password: Yup.string()
        .required('*Este campo es obligatorio.')
})

export const LoginScreen = () => {
    const { login, googleLogin } = useContext(LoginContext)

    const iniciarSecion = ({ email, password }) => {
        login({ email, password })
    }

    return (
        <div className='loginScreen'>
            <div className='login'>
                <h2>Login</h2>
                <hr />
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
                    onSubmit={iniciarSecion}
                >
                    {({ values, errors, handleChange, handleSubmit, isSubmitting, handleBlur, touched }) => (
                        <form onSubmit={handleSubmit}>
                            <input
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.email}
                                type={'text'}
                                className='form-control my-2'
                                placeholder='Email'
                                name='email'
                            />
                            {errors.email && touched.email && <small className="error-msg">{errors.email}</small>}
                            <input
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.password}
                                type={'password'}
                                className='form-control my-2'
                                placeholder='Contraseña'
                                name='password'
                            />
                            {errors.password && touched.password && <small className="error-msg">{errors.password}</small>}
                            <button className='btn btn-primary boton' type='submit' disabled={isSubmitting}>Ingresar</button>
                            <Link to="/register" className="btn btn-primary boton">Registrarme</Link>
                        </form>
                    )}
                </Formik>
                <button className='btn btn-outline-primary boton google-logo' onClick={googleLogin}>Continuar con Google</button>
            </div>
        </div>
    )
}