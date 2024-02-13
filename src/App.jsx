import "./App.css";
import NavBar from "./Components/NavBar/NavBar";
import ItemDetailContainer from './Components/ItemListContainer/ItemDetailContainer';
import ItemListContainer from '../src/Components/ItemListContainer/ItemListContainer';
import {BrowserRouter, Routes, Route, Link } from 'react-router-dom';

function App() {
  return (

    <BrowserRouter>
      <NavBar />
      <Routes>
       
        <Route path="/" element={<ItemListContainer />} />
        <Route path="/categoria/:categoryId" element={<ItemListContainer />} />
        <Route path="/item/:id" element={<ItemDetailContainer />} />   
        
         
      </Routes>

    
      
    </BrowserRouter>


  );
}

export default App;
