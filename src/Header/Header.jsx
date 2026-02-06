import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Header.module.css';

export const Header = ({ currentLocation }) => {
  const headerShadowClass = currentLocation === '/2025' 
    ? styles.headerDarkShadow
    : styles.headerLightShadow;

  return (
    <div className={`${styles.header} ${headerShadowClass}`}>
      <nav>
        <NavLink 
          to="/" 
          className={styles.navLink}
        >HOME</NavLink>
        <NavLink 
          to="/about" 
          className={styles.navLink}
        >ABOUT</NavLink>
        <NavLink 
          to="/2025" 
          className={styles.navLink}
        >2025</NavLink>
      </nav>
    </div>
  );
}

export default Header;
