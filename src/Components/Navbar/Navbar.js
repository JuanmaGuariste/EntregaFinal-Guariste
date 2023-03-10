import './Navbar.scss'
import logo from './logo.png'
import { CartWidget } from '../CartWidget/CartWidget'
import { Link } from 'react-router-dom'

export const Navbar = () => {
    return (
        <header className="header">
            <Link to="/" className="brand">
                <img src= {logo} alt="logo" className='header__logo'/>                    
                <h2 className="brand__name">UpSoon</h2>
            </Link>
            <nav className="navbar">               
                <Link to="/" className="nav__link">Usuario</Link>
                <Link to="/" className="nav__link">Favoritos</Link>
                <Link to="/" className="nav__link">Mis compras</Link>                              
            </nav>
            {/* <a href="#"><button className="cta">Contacto</button></a> */}
            <CartWidget />                                             
        </header>
    )
}