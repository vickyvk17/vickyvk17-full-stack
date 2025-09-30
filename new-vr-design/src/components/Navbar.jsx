import styles from './Navbar.module.css';
import { FaBars } from 'react-icons/fa';

const Navbar = () => {
  return (
    <header className={styles.navbar}>
      <a href="#" className={styles.logo}>Logo</a>
      <button className={styles.menuIcon} aria-label="Open menu">
        <FaBars />
      </button>
    </header>
  );
};

export default Navbar;