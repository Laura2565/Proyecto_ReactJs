export default function Item({producto}) {
    return(
        <div>
            <img src={producto.imagen} />
            <h2>{producto.name}</h2>
            <p>{producto.description}</p>
            <h3>{producto.price}</h3>
        </div>
    )
}

