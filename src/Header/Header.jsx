import React, { useState } from 'react';
import { useLocation, NavLink } from 'react-router-dom';
import styles from './Header.module.css';
import logo from '../assets/logo_main.png';
import iconHamburger from '../assets/icon_hamburger.png';
import iconClose from '../assets/icon_close.png';

export const Header = () => {
  const [ menuOpen, toggleMenu ] = useState(false);

  const location = useLocation();
  const headerShadowClass = location.pathname === '/2025' 
    ? styles.headerDarkShadow
    : styles.headerLightShadow;

  const closeMenu = () => {
    toggleMenu(false);
  }

  return (
    <div className={`
      ${styles.header} 
      ${headerShadowClass}
      ${menuOpen && styles.fullHeight}
    `}>
      <div className={`${menuOpen && styles.displayNone} ${styles.logo}`}>
        <img src={logo} alt="Site logo" />
      </div>
      <button 
        className={`${menuOpen && styles.displayNone} ${styles.menuButton}`} 
        onClick={() => toggleMenu(!menuOpen)}
      >
        <img src={iconHamburger} alt="Hamburger menu icon" />
      </button>

      <nav className={styles.navDesktop}>
        <NavLink to="/" className={styles.navLink}>HOME</NavLink>
        <NavLink to="/about" className={styles.navLink}>ABOUT</NavLink>
        <NavLink to="/2025" className={styles.navLink}>2025</NavLink>
      </nav>

      {/* Open nav menu on small screens */}
      <div className={`${menuOpen ? styles.displayMenu : styles.displayNone}`}>
        <div className={styles.menuHeader}>
          <div className={styles.logo}>
            <img src={logo} alt="Site logo" />
          </div>
          <div className={styles.button}>
            <button 
              className={styles.menuButton} 
              onClick={() => toggleMenu(!menuOpen)}
            >
              <img src={iconClose} alt="Close icon" />
            </button>
          </div>
        </div>

        <nav className={styles.navMobile}>
          <NavLink 
            to="/"
            onClick={closeMenu} 
            className={styles.navLink}
          >HOME</NavLink>
          <NavLink 
            to="/about"
            onClick={closeMenu} 
            className={styles.navLink}
          >ABOUT</NavLink>
          <NavLink 
            to="/2025"
            onClick={closeMenu} 
            className={styles.navLink}
          >2025</NavLink>
        </nav>
      </div>
    </div>
  );
}

export default Header;
