import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
// import ItemCount from './ItemCount'
import ItemList from './ItemList'
import dataJson from '../data.json'

const ItemListContainer = ( {greeting} ) => {

    const [products,setProducts] = useState([]);
    const {categoryId} = useParams()

    const getProducts = (inputData,time) => 
        new Promise((resolve, reject) => {
            setTimeout(() => {
                if(categoryId)
                    resolve(inputData.filter(e =>
                        e.category === categoryId))
                else
                    resolve(inputData); 
                reject("Error");   
            },time)
        });
    

    useEffect(() => {

        let timeRender;

        products.length ? timeRender=0 : timeRender=2000;

        getProducts(dataJson,timeRender)
            .then(res => {
                // console.log(res);
                setProducts(res);
                console.log(products);
            })
            .catch(() => console.log("Hay un error en los productos")); 

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