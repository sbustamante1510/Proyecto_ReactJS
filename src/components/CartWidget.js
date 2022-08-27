import carrito from './../carrito.png';

const CartWidget = () => {
    return(
        <picture className="header_carrito">
            <a href='./'>
                <img src={carrito} alt="carrito"/>
            </a>
        </picture>
    )
}
export default CartWidget