import React, {useContext, useState, useEffect} from 'react'
import { DataContext } from '../../Context/Dataprovider';
import { useParams } from 'react-router-dom';


export const ProductoDetalle = () => {
const value = useContext(DataContext)
const [productos] = value.productos;
const [detalle, setDetalle] = useState([]);
const [url, setUrl] = useState([0]);
const [images, setImages] = useState('');
const params = useParams();

useEffect(() =>{
    productos.forEach(producto =>{
  
        if(producto.id === parseInt(params.id)){
       setDetalle(producto)
        }
    })
},[params.id, productos])


  return (
    <>
    {
    <div className='detalles'>
      <h1>{detalle.title}</h1>
      <p className='price'>${detalle.price}</p>
      <div className='grid'>
         <div className='size'>
            <select placeholder="Tamaño">
                <option value="1">1</option>
            </select>
            <p>Tamaño</p>
         </div>
      </div>

      <button>Añadir al carrito</button>
      <img src={detalle.image.default} alt={detalle.title} />
      <input type="range" min="1" max="36" />    
      <div className="description">
       
        </div> 
    </div>
}
</>
  )
}


