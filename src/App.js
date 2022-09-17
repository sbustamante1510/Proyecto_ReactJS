import './Style.css';
import NavBar from './components/NavBar'
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import { BrowserRouter ,Routes,Route } from 'react-router-dom';
import { CartContextProvider } from './context/CartContext';

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
          </Routes>
        </BrowserRouter>
      </CartContextProvider>
    </>
  );
}

export default App;
