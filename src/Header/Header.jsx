import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Header.module.css';

export const Header = ({
  isMiniUiKitPage
}) => {
  const headerClass = isMiniUiKitPage ? styles.headerLight : styles.headerDark;
  
  return (
    <div className={`${styles.header} ${headerClass}`}>
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
