import './Style.css';
import NavBar from './components/NavBar'
import ItemListContainer from './components/ItemListContainer';

function App() {
  return (
    <>
      <NavBar/>
      <ItemListContainer greeting={'Lista de productos'}/>
    </>
  );
}

export default App;
