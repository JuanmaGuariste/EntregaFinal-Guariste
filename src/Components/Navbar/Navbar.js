import './Navbar.scss'
import logo from './logo.png'
import { CartWidget } from '../CartWidget/CartWidget'

export const Navbar = () => {
    return (
        <header className="header">
            <div className="brand">
                <img src= {logo} alt="logo" className='header__logo'/>                    
                <h2 className="brand__name">UpSoon</h2>
            </div>
            <nav>
                <ul className="nav__links">
                    <li><a href="#">Usuario</a></li>
                    <li><a href="#">Mis compras</a></li>
                    <li><a href="#">Favoritos</a></li>
                </ul>                
            </nav>
            <a href="#"><button className="cta">Contacto</button></a>
            <CartWidget />                                             
        </header>
    )
}