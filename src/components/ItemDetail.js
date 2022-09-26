import React, { useState } from 'react'
import {Link} from "react-router-dom"
import { useCart } from '../context/CartContext'
import ItemCount from './ItemCount'


const ItemDetail = ({pictureURL,title,description,prize,SKU,Stock,id}) => {

    const {Cart,addItem} = useCart();

    const [buy,setBuy] = useState(false);

    // const addDetailItem = (e) => { 
    //     addItem(e);
    //     console.log(Cart);
    // }

    const handlerOnAdd = (e) => {
        // console.log("Se agrego " +e + " productos")
        addItem({title: title,prize:prize,pictureURL: pictureURL,cantidad: e,id:id});
        console.log(Cart);
        setBuy(true)
    }


    return (
        <article className="ItemDetail">  
            <picture>
                <img src={pictureURL} alt="imagenItem"/>
            </picture>
            <div>
                <h3>{title}</h3>
                <p>{description}</p>
                <p>Precio : ${prize}</p>
                <p>SKU : {SKU}</p>
                {/* <button className = "btn_comprar" onClick={() => addDetailItem({productDetail})}>Comprar </button> */}
                {buy ? (<div>
                            <Link to={'/cart'}>
                                <button className='btn_endCompra'>Terminar mi compra</button>
                            </Link>
                        </div>
                    ) : (
                        <ItemCount stock={Stock} initial="1" onAdd={handlerOnAdd}/>
                )}
            </div>
        </article>
    )
}

export default ItemDetail