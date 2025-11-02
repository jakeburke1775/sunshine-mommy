import { Link } from 'react-router-dom';
import styles from './Header.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <Link to="/" className={styles.nav__link}>Home</Link>
        <Link to="/about" className={styles.nav__link}>About</Link>
        <Link to="/contact" className={styles.nav__link}>Contact</Link>
      </nav>
    </header>
  );
};

export default Header;