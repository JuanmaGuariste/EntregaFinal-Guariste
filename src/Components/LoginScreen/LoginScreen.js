import { useContext, useState } from 'react'
import { LoginContext } from '../../context/LoginContext'
import './LoginScreen.scss'


export const LoginScreen = () => {
    const {user, tryLogin} = useContext(LoginContext)

    const [values, setValues] = useState({
        email: '',
        password: ''
    })

    const handleSubmit = (e) => {
        e.preventDefault()
        tryLogin(values)
    }

    // const handleEmail = (e) => {
    //     setEmail(e.target.value)
    // }
    // const handlePassword = (e) => {
    //     setPassword(e.target.value)
    // }

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
                        placeholder='Tu email'
                        name='email'
                    />
                    <input
                        value={values.password}
                        type={'password'}
                        onChange={handleInputChange}
                        className='form-control my-3'
                        placeholder='Password'
                        name='password'
                    />
                    <button className='btn btn-primary' type='submit'>Login</button>
                </form>
            </div>
        </div>
    )
}