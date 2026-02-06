import React from 'react';
import { useLocation, NavLink } from 'react-router-dom';
import styles from './Header.module.css';

export const Header = ({
  isMiniUiKitPage
}) => {
  const location = useLocation();
  const headerShadowClass = location.pathname === '/2025' 
    ? styles.headerDarkShadow
    : styles.headerLightShadow;

  return (
    <div className={`${styles.header} ${headerShadowClass}`}>
      <nav>
        <NavLink 
          to="/" 
          className={styles.navLink}
          activeClassName={styles.activeLink}
        >HOME</NavLink>
        <NavLink 
          to="/about" 
          className={styles.navLink}
          activeClassName={styles.activeLink}
        >ABOUT</NavLink>
        <NavLink 
          to="/2025" 
          className={styles.navLink}
          activeClassName={styles.activeLink}
        >2025</NavLink>
      </nav>
    </div>
  );
}

export default Header;
