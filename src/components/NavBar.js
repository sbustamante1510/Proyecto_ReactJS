import {Link} from "react-router-dom"
import CartWidget from './CartWidget'
import { useCart } from '../context/CartContext'

const NavBar = () => {

    const {Cart,nroItem} = useCart();

    return(
        <header>
            <nav className="header_nav flex-row container">
                <h1>
                    <Link to={'/'}>LOGO ROPA</Link>
                </h1> 
                <ul className="header_ul flex-row">
                    {/* <li><a href="./">Home</a></li>
                    <li><a href="./">Nosotros</a></li> */}
                    <li>
                        <Link to={'/category/polos'}>Polos</Link>
                    </li>
                    <li>
                        <Link to={'/category/jeans'}>Jeans</Link>
                    </li>
                    <li>
                        <Link to={'/category/casacas'}>Casacas</Link>
                    </li>
                    {/* <li><a href="./">Blog</a></li>
                    <li><a href="./">Contacto</a></li> */}
                </ul>
                {Cart.length > 0 && (
                    <Link to={'/cart'}>
                        <CartWidget ItemCarrito={nroItem}/>
                    </Link>
                    )
                }
            </nav>
        </header>
    )
}
export default NavBar