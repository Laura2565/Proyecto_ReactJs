import { Link, NavLink } from "react-router-dom";

export default function NavBar() {
  return (
    <header className="container">      
       
        <nav className="nav_container">
        <Link to="/">
          <img width={100} src="/logosprinkles.jpg" />
        </Link>
          <NavLink  to="/categoria/Sprinkles">Sprinkles</NavLink>
          <NavLink to="/categoria/Perlas">Perlas </NavLink>
          <NavLink to="/categoria/Acuarelas">Acuarelas</NavLink>

          <Link to="/">
          <img width={40}  height={40} src="/carrito.png" />
        </Link>
        </nav>
    
    </header>
  );
}

