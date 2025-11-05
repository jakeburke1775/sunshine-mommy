import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <nav className="nav">
        <Link to="/" className="nav__link">Home</Link>
        <Link to="/about" className="nav__link">About</Link>
        <Link to="/contact" className="nav__link">Contact</Link>
      </nav>
    </header>
  );
};

export default Header;