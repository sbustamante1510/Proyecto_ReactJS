import './Style.css';
import NavBar from './components/NavBar'
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';

function App() {
  return (
    <>
      <NavBar/>
      <ItemListContainer greeting={'Lista de productos'}/>
      <ItemDetailContainer/>
    </>
  );
}

export default App;
