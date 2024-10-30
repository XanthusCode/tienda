import { Link } from 'react-router-dom';
import '../App.css';

const Header = () => {
  return (
    <header>
      <nav className='navbar'>
        <Link to="/">Inicio</Link>
        <Link to="/cart">Carrito</Link>
      </nav>
    </header>
  );
};

export default Header;

