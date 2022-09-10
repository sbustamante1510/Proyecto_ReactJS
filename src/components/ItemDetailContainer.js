import { useState, useEffect } from 'react'
import dataDetailJson from '../dataDetalle.json'
import ItemDetail from './ItemDetail'

const ItemDetailContainer = () => {

    const [productDetail,setProductDetail] = useState({}); 

    const getProductDetail = (time) => 
        new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(dataDetailJson.find( p => p.id === "1"));
                reject("Error");
            },time)
        });

    useEffect(() => {

        getProductDetail(2000)
            .then(res => {
                console.log(res);
                setProductDetail(res);
            })
            .catch(() => console.log("Hay un error en los productos")); 

    },[]);

    return(
        <div className='container'>
            {productDetail.id > 0 ? 
                (<ItemDetail productDetail={productDetail}/>) : 
                (<h2>Cargando ....</h2>)
            }
        </div>
    )

    
}

export default ItemDetailContainer