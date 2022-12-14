import React from 'react'
import {useEffect } from 'react'
import { useCart } from '../context/CartContext'
import CartDetail from './CartDetail'
import {Link} from "react-router-dom"

export const Cart = () => {

    const {Cart,sumaItem,eliminarItem,clearCart} = useCart();

    useEffect(() => {
        console.log(Cart)
        
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])

    const CarritoItemEliminar = (idRemove) => {
        eliminarItem(idRemove.id);
    }

    const CarritoEliminarTotal = () => {
        clearCart();
    }

    return (
        <>
        {Cart.length > 0 ? (
            <div className='container cart'>
                <h3>Carrito</h3>
                {Cart.map(e => 
                    <CartDetail key={e.id} {...e} onRemove={CarritoItemEliminar}/>
                )}
                <h3>Total : ${sumaItem()}</h3>
                <Link to={'/checkout'}>
                    <button className='cart_button'>Check-Out</button>
                </Link>
                <button onClick={CarritoEliminarTotal} className='cart_button'>Limpiar Carrito</button>
            </div>
        ) : (
            <div className='container cart Cart__Item'>
                <h3>No hay productos</h3>
                <Link to={'/'}>
                    <button>Ir a la TIENDA</button>
                </Link>
            </div>
        )
        }
        </>
    )
}

export default Cart