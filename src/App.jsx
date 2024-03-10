import React from "react";
import { Header } from "./Components/Header";
import 'boxicons';
import { BrowserRouter as Router } from "react-router-dom";
import { Paginas } from "./Components/Paginas";
import { DataProvider} from "./Context/Dataprovider";
import {Carrito } from "./Components/CartWidget";




function App() {
  return (
    <DataProvider>
    <div className="App">
      <Router>
        <Header />
        <Carrito />
        <Paginas />
      </Router>
    </div>
    </DataProvider>
  );
}

export default App;


