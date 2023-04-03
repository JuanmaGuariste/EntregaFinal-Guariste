import './Navbar.scss'
import logo from './logo.png'
import { CartWidget } from '../CartWidget/CartWidget'
import { Link } from 'react-router-dom'
import { LoginContext } from '../../context/LoginContext'
import { useContext } from 'react'

export const Navbar = () => {
    const {logout } = useContext(LoginContext)

    return (
        <header className="header">
            <Link to="/" className="brand">
                <img src= {logo} alt="logo" className='header__logo'/>                    
                <h2 className="brand__name">UpSoon</h2>
            </Link>
            <nav className="navbar">               
                <Link to="/productos/remeras" className="nav__link">Remeras</Link>
                <Link to="/productos/buzos" className="nav__link">Buzos</Link>
                <Link to="/productos/pantalones" className="nav__link">Pantalones</Link>  
                <Link to="/productos/zapatillas" className="nav__link">Zapatillas</Link> 
                <Link to="/productos/camperas" className="nav__link">Camperas</Link> 
            </nav>            
            <CartWidget />   
            <div>
                {/* <h6></h6> */}
                <button className='btn btn-danger' onClick={logout}>Logout</button>
            </div>                                          
        </header>
    )
}