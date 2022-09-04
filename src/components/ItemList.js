import Item from './Item'

const ItemList = ({products}) => {
    return(
        <div className='ItemList flex-row'>  
            {products.length ? 
                (products.map( (e) => <Item key={e.id} {...e}/>)) : 
                (<h2>Cargando ....</h2>)
            }
        </div>
    )
}
export default ItemList