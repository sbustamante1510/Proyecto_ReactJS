import './Style.css';
import { BrowserRouter ,Routes,Route } from 'react-router-dom';
import { CartContextProvider } from './context/CartContext';
import NavBar from './components/NavBar'
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import Cart from './components/Cart'
import Checkout from './components/Checkout';


function App() {
  return (
    <>
      {/* <ItemDetailContainer/> */}
      <CartContextProvider>
        <BrowserRouter>
          <NavBar/>
          <Routes>
            <Route path='/' element={<ItemListContainer greeting={'Lista de productos'}/>}/>
            <Route path='/category/:categoryId' element={<ItemListContainer greeting={'Lista de productos'}/>}/>
            <Route path='/item/:id' element={<ItemDetailContainer/>}/>
            <Route path='/cart' element={<Cart/>}/>
            <Route path='/checkout' element={<Checkout/>}/>
          </Routes>
        </BrowserRouter>
      </CartContextProvider>
    </>
  );
}

export default App;
