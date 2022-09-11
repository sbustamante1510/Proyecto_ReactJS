const Item = ({title,prize,pictureURL}) => {
    return(
        <div className="Item">  
            <h3>{title}</h3>
            <img src={pictureURL} alt="imagenItem"/>
            <p>{prize}</p>
        </div>
    )
}
export default Item