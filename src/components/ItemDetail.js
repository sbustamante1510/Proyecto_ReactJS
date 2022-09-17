import React from 'react'
import { useCart } from '../context/CartContext'
import ItemCount from './ItemCount'


const ItemDetail = ({productDetail}) => {

    const {Cart,addItem} = useCart();

    const addDetailItem = (e) => { 
        addItem(e);
        console.log(Cart);
    }


    return (
        <article className="ItemDetail">  
            <picture>
                <img src={productDetail.pictureURL} alt="imagenItem"/>
            </picture>
            <div>
                <h3>{productDetail.title}</h3>
                <p>{productDetail.description}</p>
                <p>{productDetail.prize}</p>
                <p>SKU : {productDetail.SKU}</p>
                <button className = "btn_comprar" onClick={() => addDetailItem(productDetail)}>Comprar </button>
                <ItemCount stock={productDetail.Stock} initial="1"/>
            </div>
        </article>
    )
}

export default ItemDetail