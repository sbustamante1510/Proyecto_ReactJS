import React from 'react'

const CartDetail = ({id,pictureURL,title,cantidad, prize,onRemove}) => {
    return (
        <div className='flex-row ItemDetail Cart__Item'>
            <picture>
                <img src={pictureURL} alt="img_item_carrito"/>
            </picture>
            <div>
                <h3>{title}</h3>
                <p>Cantidad : {cantidad}</p>
                <p>Precio unitario : ${prize}</p>
                <p>Subtotal : ${cantidad*prize}</p>
                <button onClick={() => onRemove({id}) }>Eiminar</button>
                {/* <button onClick={onRemove({id}) }>Eliminar</button> */}
            </div>
        </div>
    )
}

export default CartDetail