import React, { useState } from 'react'
import {Link} from "react-router-dom"
import { useCart } from '../context/CartContext'
import ItemCount from './ItemCount'


const ItemDetail = ({productDetail}) => {

    const {Cart,addItem} = useCart();

    const [buy,setBuy] = useState(false);

    // const addDetailItem = (e) => { 
    //     addItem(e);
    //     console.log(Cart);
    // }

    const handlerOnAdd = (e) => {
        // console.log("Se agrego " +e + " productos")
        addItem({...productDetail,cantidad: e});
        console.log(Cart);
        setBuy(true)
    }


    return (
        <article className="ItemDetail">  
            <picture>
                <img src={productDetail.pictureURL} alt="imagenItem"/>
            </picture>
            <div>
                <h3>{productDetail.title}</h3>
                <p>{productDetail.description}</p>
                <p>Precio : ${productDetail.prize}</p>
                <p>SKU : {productDetail.SKU}</p>
                {/* <button className = "btn_comprar" onClick={() => addDetailItem({productDetail})}>Comprar </button> */}
                {buy ? (<div>
                            <Link to={'/cart'}>
                                <button className='btn_endCompra'>Terminar mi compra</button>
                            </Link>
                        </div>
                    ) : (
                        <ItemCount stock={productDetail.Stock} initial="1" onAdd={handlerOnAdd}/>
                )}
            </div>
        </article>
    )
}

export default ItemDetail