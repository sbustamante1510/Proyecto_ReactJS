// import polo from '../polo.jpg';
import React,{useState} from 'react';

const ItemCount = ({stock,initial,onAdd} ) => {

    const [counter, setCounter] = useState(initial)

    const incrementoContador = () =>{
        if(counter < stock)
            setCounter(Number(counter) + 1)
    }

    const decrementoContador = () =>{
        if(counter > initial) 
            setCounter(counter - 1)
    } 


    return(
        <div className="ItemCount">  
            {/* <img src={polo} alt="polo"/> */}
            <p>Stock : {stock} unidades</p>
            <i onClick={decrementoContador} className="fa-solid fa-circle-minus"></i>
            <span>{counter}</span>
            <i onClick={incrementoContador} className="fa-solid fa-circle-plus"></i><br/>
            <button onClick={() => onAdd(counter)}>Agregar al carrito</button>
        </div>
    )
}
export default ItemCount