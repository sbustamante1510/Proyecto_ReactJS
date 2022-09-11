import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import dataDetailJson from '../dataDetalle.json'
import ItemDetail from './ItemDetail'

const ItemDetailContainer = () => {

    const [productDetail,setProductDetail] = useState({});
    const {id} = useParams();

    const getProductDetail = (time) => 
        new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(dataDetailJson.find( p => p.id === id));
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
        
        // eslint-disable-next-line react-hooks/exhaustive-deps    
    },[id]);


    return(
        <div className='container listContainer'>
            {productDetail.id > 0 ? 
                (<ItemDetail productDetail={productDetail}/>) : 
                (<h2>Cargando ....</h2>)
            }
        </div>
    )

    
}

export default ItemDetailContainer