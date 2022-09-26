import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import {collection, getFirestore,getDocs, query,where} from 'firebase/firestore'
// import ItemCount from './ItemCount'
import ItemList from './ItemList'
// import dataJson from '../dataDetalle.json'

const ItemListContainer = ( {greeting} ) => {

    const [products,setProducts] = useState([]);
    const {categoryId} = useParams()

    const getProducts = (time) => {
        
        // new Promise((resolve, reject) => {
        //     setTimeout(() => {
        //         if(categoryId)
        //             resolve(inputData.filter(e =>
        //                 e.category === categoryId))
        //         else
        //             resolve(inputData); 
        //         reject("Error");   
        //     },time)
        // });

        const db = getFirestore();



        
        
        // const itemCollection = doc(db, 'dataDetalle','5SfKX69T3FwYP29GOsGK');

        // setTimeout(() => {
        //     getDocs(itemCollection).then((snapshot) => {
        //         setProducts(snapshot.docs.map(doc => ({id:doc.id, ...doc.data})));
        //     })
        // },time)

        // getDocs(itemCollection).then((snapshot) => {
        //     setProducts(snapshot.docs.map(doc => ({id:doc.id, ...doc.data})));
        // });

        setTimeout(() => {

            const itemCollection = collection(db,'dataDetalle');

            if(categoryId){
                const q = query(itemCollection,where('category','==',categoryId));
                getDocs(q).then((snapshot) => {
                    setProducts(snapshot.docs.map(doc => ({id:doc.id, ...doc.data()})));
                    // console.log(snapshot.docs.map(doc => ({id:doc.id, ...doc.data})))
                    console.log(snapshot.docs.map(d => ({id:d.id,...d.data()})));
                    // console.log(snapshot.data());
                });
            }
            else{
                getDocs(itemCollection).then((snapshot) => {
                    setProducts(snapshot.docs.map(doc => ({id:doc.id, ...doc.data()})));
                    // console.log(snapshot.docs.map(doc => ({id:doc.id, ...doc.data})))
                    console.log(snapshot.docs.map(d => ({id:d.id,...d.data()})));
                    // console.log(snapshot.data());
                });
            }    
        },time)

    }
    

    useEffect(() => {

        let timeRender;

        products.length ? timeRender=0 : timeRender=1500;

        // getProducts(dataJson,timeRender)
        //     .then(res => {
        //         // console.log(res);
        //         setProducts(res);
        //         console.log(products);
        //     })
        //     .catch(() => console.log("Hay un error en los productos")); 

        getProducts(timeRender);

        // eslint-disable-next-line react-hooks/exhaustive-deps    
    },[categoryId]);

    return(
        <div className="container listContainer">
            <p>{greeting}</p>
            <ItemList products={products}/>
            {/* <ItemCount stock="8" initial="1"/> */}
        </div>
    )
}
export default ItemListContainer