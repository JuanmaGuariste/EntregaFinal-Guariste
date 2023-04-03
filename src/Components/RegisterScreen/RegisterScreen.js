import { useContext, useState } from 'react'
import { LoginContext } from '../../context/LoginContext'
import './RegisterScreen.scss'
import { Link } from 'react-router-dom'


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
                    <button className='btn btn-primary boton' type='submit'>Crear usuario</button>
                    <Link to="/login" className='btn btn-primary boton'>Iniciar seción</Link>

                </form>
            </div>
        </div>
    )
}