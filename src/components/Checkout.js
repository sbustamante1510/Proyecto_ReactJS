import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext'
import {collection, getFirestore, addDoc} from 'firebase/firestore'

const Checkout = () => {

    const {Cart,sumaItem,clearCart} = useCart();

    const [name,setName] = useState("");
    const [email,setEmail] = useState("");
    const [number,setNumber] = useState("");
    const [loading,setLoading] = useState(false)
    const [idCompra,setidCompra] = useState("");

    const order = {
        buyer: {name: name , email: email , number: number},
        items: Cart,
        total: sumaItem()
    }

    const orderHandler = () => {
        if(name !=="" && email !=="" && number > 0){
            console.log(order);

            const db = getFirestore();
            const orderCollection = collection(db,'orders')

            addDoc(orderCollection,order).then(res => {
                setidCompra(res.id);
                // console.log(res.id);
            })

            clearCart()
            setLoading(true)
        }
        else
            alert("Complete todos los campos")
    }

    return (
    <div className='container checkout'>
        {!loading ? (
            <div>
                <h2>Completa tus datos</h2>
                <div className="container_formulario">
                    <div className="data_in">
                        <label >Nombre</label>
                        <input value={name} 
                        type="text" 
                        id="cantidad"
                        onChange={(e) => setName(e.target.value)}
                        ></input>
                    </div>
                    <div className="data_in">
                        <label >Email</label>
                        <input value={email}
                        type="text" 
                        id="plazo"
                        onChange={(e) => setEmail(e.target.value)}
                        ></input>
                    </div>
                    <div className="data_in">
                        <label >Telefono</label>
                        <input value={number}
                        type="number" 
                        id="tasa"
                        onChange={(e) => setNumber(e.target.value)}
                        ></input>
                    </div>
                    <button onClick={orderHandler}>Finalizar compra</button>
                </div>
            </div>
        ) : (
            <div className='container_formulario formulario_compraOk'>
                <h2>Gracias por tu compra</h2>
                <p>Tu numero de orden es : <span>{idCompra}</span></p>
                <Link to={'/'}>
                    <button>Ir al Inicio</button>   
                </Link>
            </div>
        )
        }

    </div>
    )
}

export default Checkout