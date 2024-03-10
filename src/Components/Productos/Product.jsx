import React, {useContext} from 'react';
import { DataContext } from "../../Context/Dataprovider";
import { ItemProducto } from "./ItemProducto";

export const Productos = () => {

  const value = useContext(DataContext)
  const [productos] = value.productos
 
  console.log(productos)

  return (
    <>
      <h1 className='title'>PRODUCTOS</h1>
      <div className='productos'>
        { productos.map(producto => (
            <ItemProducto
              key={producto.id}
              id={producto.id}
              title={producto.title}
              price={producto.price}
              image={producto.image}
              category={producto.category}
              img1={producto.img}
              cantidad={producto.id}                  
             
             />


          ))
        }

      </div >

    </>
  );
};


