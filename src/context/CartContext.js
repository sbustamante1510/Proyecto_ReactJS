import React,{ useState, useContext } from "react"

const CartContext = React.createContext([]);

const useCart = () => { 
    return useContext(CartContext);    
}

const CartContextProvider = ({children}) => { 

    const [Cart, setCart] = useState([])

    const addItem = (item,quantity) => {
        // setCart(item);
        setCart(prevState => prevState.concat(item) )
    }

    // const removeItem = (itemId) => { 
    //     setCart(Cart.filter(itemId))
    // }

    const clear = () => { setCart([]) }

    const context = {
        Cart,
        addItem,
        clear
    }

    return(
        <CartContext.Provider value={context}>
            {children}
        </CartContext.Provider>
    )

}

export {useCart,CartContextProvider}