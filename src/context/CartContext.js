import React,{ useState, useContext } from "react"

const CartContext = React.createContext([]);

const useCart = () => { 
    return useContext(CartContext);    
}

const CartContextProvider = ({children}) => { 

    const [Cart, setCart] = useState([])

    const addItem = (item) => {
        // setCart(item);
        let indRepeat = 0;
        if(Cart.length === 0){
            setCart(prevState => prevState.concat(item));   
        }
        // Cart.length === 0 && setCart(prevState => prevState.concat(item))  
        Cart.forEach(e => {
            if(e.id === item.id){
                alert("Producto existente");
                // e.cantidad = e.cantidad + Number(item.cantidad);
                // e.cantidad = e.cantidad + Number(item.cantidad);
                indRepeat = 1;
            }
            // indRepeat === 0 && setCart(prevState => prevState.concat(item))
        })
        if(indRepeat === 0 && Cart.length !== 0){
            setCart(prevState => prevState.concat(item));
        }
        console.log(Cart)
    }

    const clearCart = () => { setCart([]) }

    const sumaItem = () => {
        let sumaTotal = 0;
        Cart.forEach(e => {
            sumaTotal = (e.cantidad*e.prize) + sumaTotal;
        })
        return sumaTotal;
    }

    const eliminarItem = (id) => {
        setCart(Cart.filter(e => e.id !== id))
        console.log(Cart)
    }

    const nroItem = () => {
        let itemLocal = 0;
        Cart.forEach(e => {
            itemLocal = Number(e.cantidad) + itemLocal;
        })
        return itemLocal;
    }

    const context = {
        Cart,
        addItem,
        clearCart,
        sumaItem,
        eliminarItem,
        nroItem,
    }

    return(
        <CartContext.Provider value={context}>
            {children}
        </CartContext.Provider>
    )

}

export {useCart,CartContextProvider}