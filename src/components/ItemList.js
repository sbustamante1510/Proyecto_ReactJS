import {Link} from "react-router-dom"
import Item from './Item'

const ItemList = ({products}) => {
    return(
        <div className='ItemList flex-row'>  
            {products.length ? 
                (products.map( (e) =>
                    <Link to={`/item/${e.id}`} key={e.id}>
                        <Item key={e.id} {...e}/>
                    </Link>
                    )) : 
                (<h2>Cargando ....</h2>)
            }
        </div>
    )
}
export default ItemList