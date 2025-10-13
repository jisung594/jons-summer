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
        <NavLink to="/" className={styles.navLink} activeClassName={styles.activeLink}>HOME</NavLink>
        <NavLink to="/mini-ui-kit" className={styles.navLink} activeClassName={styles.activeLink}>MINI UI KIT</NavLink>
      </nav>
    </div>
  );
}

export default Header;
