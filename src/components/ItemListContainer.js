import ItemCount from './ItemCount'

const ItemListContainer = ( {greeting} ) => {
    return(
        <div className="container listContainer">
            <p>{greeting}</p>
            <ItemCount stock="8" initial="1"/>
        </div>
    )
}
export default ItemListContainer