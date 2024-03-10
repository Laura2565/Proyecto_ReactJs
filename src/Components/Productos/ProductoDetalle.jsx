import React, {useContext, useState, useEffect} from 'react'
import { DataContext } from '../../Context/Dataprovider';
import { useParams } from 'react-router-dom';



export const ProductoDetalles = () => {
const value = useContext(DataContext)
const [productos] = value.productos;
const addCarrito = value.productos;
const [detalle, setDetalle] = useState([]);
const [url, setUrl] = useState(0);
const [images, setImages] = useState('');
const params = useParams();
let item= 0;

useEffect(() =>{
    productos.forEach(producto =>{
  
        if(producto.id === parseInt(params.id)){
       setDetalle(producto)
        }
    })
},[params.id, productos])


useEffect(() =>{
    const values = `${detalle.img1}${url}${detalle.img2}`
    setImages(values);
},[url, params.id])


  const handleInput = e =>{
    const number = e.target.value.toString().padStart(2, '01')
    setUrl(number)
    console.log(number)
  }

  if(detalle.lenght <1) return null;

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

      <button onClick={()=>addCarrito(detalle.id) }>Añadir al carrito</button>

{
    url ?   <img src="{images}" alt={detalle.title} /> :  <img src="{detalle.image.default}" 
    alt={detalle.title} />
}

    
      <input type="range" min="1" max="36" value={url} onChange={handleInput}/>    
      <div className="description">
       
        </div> 
    </div>
}
 <h2 className='relacionado'> Productos relacionados </h2>
 <div className='productos'>
        { productos.map((producto) => {
            if((item > 6)&&(detalle.category === producto.category)) {
             item++;
            
                return  <ItemProducto
              key={producto.id}
              id={producto.id}
              title={producto.title}
              price={producto.price}
              image={producto.image}
              category={producto.category}
              cantidad={producto.id}                  
             
             />
            }
        })
        }

      </div >

</>
  )
}


