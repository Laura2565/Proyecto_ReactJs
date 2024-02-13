import { useState } from "react";
import { useParams } from "react-router-dom";

export default function ItemDetailContainer() {
    const [producto, setProductos] = useState();

    if (!producto) return null

    return (
        <main className="item-detail">
            <h1>
                {producto.name}
            </h1>
            <section style={{ display: "flex" }}>
                <section>
                    <p>Name: {producto.name}</p>
                    <p>Description: {producto.description}</p>
                    <p>Price: {producto.price}</p>
                    <p>Stock: {producto.stock}</p>
                    <p>Categoria: {producto.category}</p>
                </section>
            </section>
        </main>
    );
}