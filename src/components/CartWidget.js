import carrito from './../carrito.png';

const CartWidget = ({ItemCarrito}) => {
    return(
        <picture className="header_carrito">
            <img src={carrito} alt="carrito"/>
            <span>{ItemCarrito()}</span>
        </picture>
    )
}
export default CartWidget