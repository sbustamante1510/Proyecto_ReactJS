import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import {collection, getFirestore,getDocs, query,where} from 'firebase/firestore'
// import dataDetailJson from '../dataDetalle.json'
import ItemDetail from './ItemDetail'

const ItemDetailContainer = () => {

    const [productDetail,setProductDetail] = useState([]);
    const {id} = useParams();

    const getProductDetail = (time) => {
        // new Promise((resolve, reject) => {
        //     setTimeout(() => {
        //         resolve(dataDetailJson.find( p => p.id === id));
        //         reject("Error");
        //     },time)
        // });

        setTimeout(() => {
            const db = getFirestore();
    
            const itemCollection = collection(db,'dataDetalle');
            console.log(id)
            const q = query(itemCollection,where('idDetail','==',id));
            getDocs(q).then((snapshot) => {
                setProductDetail(snapshot.docs.map(doc => ({id:doc.id, ...doc.data()})));
                // console.log(snapshot.docs.map(doc => ({id:doc.id, ...doc.data})))
                console.log(snapshot.docs.map(d => ({id:d.id,...d.data()})));
                // console.log(snapshot.data());
            });
        },time)
    }    

    useEffect(() => {

        // getProductDetail(2000)
        //     .then(res => {
        //         console.log(res);
        //         setProductDetail(res);
        //     })
        //     .catch(() => console.log("Hay un error en los productos"));
            
        getProductDetail(1500)
        
        // eslint-disable-next-line react-hooks/exhaustive-deps    
    },[id]);


    return(
        <div className='container listContainer'>
            {productDetail.length > 0 ? 
                (productDetail.map( e => 
                    <ItemDetail key={e.id} {...e}/>))
                // (<ItemDetail productDetail={productDetail}/>) 
                : 
                (<h2>Cargando ....</h2>)
            }
            {/* // {productDetail.map( e => 
            //     <ItemDetail key={e.id} {...e}/>
            // )} */}
        </div>
    )

    
}

export default ItemDetailContainer