import { useState, useEffect } from 'react'
// import ItemCount from './ItemCount'
import ItemList from './ItemList'
import dataJson from '../data.json'

const ItemListContainer = ( {greeting} ) => {

    const [products,setProducts] = useState([]);

    const getProducts = (inputData,time) => 
        new Promise((resolve, reject) => {
            setTimeout(() => {
                if(inputData){
                    resolve(inputData);
                }
                else{
                    reject("Error");
                }
            },time)
        });

    useEffect(() => {

        getProducts(dataJson,2000)
            .then(res => {
                setProducts(res);
            })
            .catch(() => console.log("Hay un error en los productos")); 

    },[]);

    return(
        <div className="container listContainer">
            <p>{greeting}</p>
            <ItemList products={products}/>
            {/* <ItemCount stock="8" initial="1"/> */}
        </div>
    )
}
export default ItemListContainer