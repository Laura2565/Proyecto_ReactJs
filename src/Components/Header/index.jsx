import React,{useContext} from 'react'
import Logo from "../../Images/logosprinkles.jpg";
import { Link } from "react-router-dom";
import { DataContex } from '../../Context/Dataprovider';
  
export const Header = () => {
   const value = useContext(DataContex);
   const [menu, setMenu] = value.menu;
   const [carrito] = value.carrito

   const toogleMenu = () => {
    setMenu(!menu)
   }

  return (
    <header>
            
     <Link to='/'>
        <div className="Logo">
          <img src="Logo" alt="logo" width="90" />
        </div> 
     </Link>
     <ul>
      <li>
        <Link to='/'>INICIO</Link>
      </li>
      <li>
        <Link to='/producto'>PRODUCTOS</Link>
      </li>
      <div classeName='cart' onClick={toogleMenu}>
        <box-icon name="cart"></box-icon>
        <span className='item_total'>{carrito.lenght}</span>
        
        
      </div>


     </ul>
    



    </header>
  )
}



