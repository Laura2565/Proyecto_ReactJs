import React from 'react'
import { Switch, Route } from "react-router-dom";
import { Inicio } from "./Inicio";
import { Producto } from '../Components/Productos/Product';
import  { ProductoDetalle} from './Productos/ProductoDetalle';



export const Paginas = () => {
  return (
    <section>
    <Switch>
        <Route path='/' exact component={Inicio} />
        <Route path='/productos' exact component={Producto} />
        <Route path='/productos/:id' exact component={ProductoDetalle} />


  </Switch>

    </section>
  )
}


