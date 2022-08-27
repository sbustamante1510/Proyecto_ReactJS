import CartWidget from './CartWidget'

const NavBar = () => {
    return(
        <header>
            <nav className="header_nav flex-row container">
                <h1><a href="./">LOGO ROPA</a></h1> 
                <ul className="header_ul flex-row">
                    <li><a href="./">Home</a></li>
                    <li><a href="./">Nosotros</a></li>
                    <li><a href="./">TIENDA</a></li>
                    <li><a href="./">Blog</a></li>
                    <li><a href="./">Contacto</a></li>
                </ul>
                <CartWidget/>
            </nav>
        </header>
    )
}
export default NavBar