import { useContext } from 'react'
import { LoginContext } from '../../context/LoginContext'
import './RegisterScreen.scss'
import { Link } from 'react-router-dom'
import { Formik } from 'formik';
import * as Yup from 'yup';

const schema = Yup.object().shape({
    email: Yup.string()
        .required('*Este campo es obligatorio.'),
    password: Yup.string()
        .required('*Este campo es obligatorio.')
        .min(2, '*Ingrese al menos 2 caracteres.')
        .max(20, '*El apellido debe contener menos de 20 caracteres.'),
})

export const RegisterScreen = () => {
    const { register } = useContext(LoginContext)

    const registrarse = ({ email, password }) => {
        register({ email, password })
    }

    return (
        <div className='registerScreen'>
            <div className='login'>
                <h2>Registrate</h2>
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
                    onSubmit={registrarse}
                >
                    {({ values, errors, handleChange, handleSubmit, isSubmitting, handleBlur, touched }) => (
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
                            {errors.email && touched.email && <small className="error-msg">{errors.email}</small>}
                            <input
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.password}
                                type={'password'}
                                placeholder='Contraseña'
                                className='form-control my-2'
                                name="password"
                            />
                            {errors.password && touched.password && <small className="error-msg">{errors.password}</small>}
                            <button className="btn btn-primary boton" type="submit" disabled={isSubmitting}>Crear usuario</button>
                            <Link to="/login" className="btn btn-primary boton">Ya tengo una cuenta</Link>
                        </form>
                    )}
                </Formik>
            </div>
        </div>
    )
}