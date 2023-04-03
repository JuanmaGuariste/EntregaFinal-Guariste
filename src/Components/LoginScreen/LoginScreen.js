import { useContext, useState } from 'react'
import { LoginContext } from '../../context/LoginContext'
import './LoginScreen.scss'
import { Link } from 'react-router-dom'


export const LoginScreen = () => {
    const { login, googleLogin } = useContext(LoginContext)

    const [values, setValues] = useState({
        email: '',
        password: ''
    })

    const handleSubmit = (e) => {
        e.preventDefault()
        login(values)
    }
    const handleInputChange = (e) => {
        setValues({
            ...values,
            [e.target.name]: e.target.value
        })
    }    
    return (
        <div className='loginScreen'>
            <div className='login'>
                <h2>Login</h2>
                <hr/>

                <form onSubmit={handleSubmit}>
                    <input
                        value={values.email}
                        type={'text'}
                        onChange={handleInputChange}
                        className='form-control'
                        placeholder='Ingresa tu email'
                        name='email'
                    />
                    <input
                        value={values.password}
                        type={'password'}
                        onChange={handleInputChange}
                        className='form-control my-3'
                        placeholder='Ingresa contraseña'
                        name='password'
                    />
                    <button className='btn btn-primary boton' type='submit'>Login</button>                    
                    <Link to="/register" className="btn btn-primary boton">Registrarme</Link>
                </form>
                <button className='btn btn-outline-primary boton google-logo' onClick={googleLogin}>Iniciar con Google</button>
            </div>
        </div>
    )
}