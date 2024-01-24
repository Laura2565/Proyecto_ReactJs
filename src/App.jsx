import Product from '../src/Product';
import './App.css';
import ItemListContainer from '../src/Components/ItemListContainer/ItemListContainer';
import Navbar from './Components/NavBar/NavBar'; 

function App() {
return (
  <div className='App'>
   <Navbar/>
   <ItemListContainer greeting='Bienvenidos a mi E-Commerce' />
   <Product img='https://sprinklepop.shop/cdn/shop/products/HeySugar23.jpg?v=1679950980' title='Sprinkles A' description='Sprinkles comestibles' price= {250} />
   <Product img='https://assets-global.website-files.com/6586ad1766809383c71cd41e/6588f686e8a2994aac31469d_34-Sprinkles.jpeg' title='Sprinkles B' description='Sprinkles comestibles' price= {150} />
   <Product img='https://www.shopsweetsandtreats.com/media/catalog/product/cache/4f76f604aaa0c480ff4de072aae5c104/s/p/sprinkles-mix-birthday-girl.jpg' title='Sprinkles C' description='Sprinkles comestibles' price= {150} />
  </div>
);
}

export default App;
