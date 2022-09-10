import React from 'react'
import ItemCount from './ItemCount'

const ItemDetail = ({productDetail}) => {
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
                <ItemCount stock={productDetail.Stock} initial="1"/>
            </div>
        </article>
    )
}

export default ItemDetail