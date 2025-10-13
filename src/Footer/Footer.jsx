import React from 'react';
import styles from './Footer.module.css';

export const Footer = ({
  ...props
}) => {
  return (
    <div className={styles.footer}>
      <div className={styles.footerContent}>
        <div className={styles.socialMediaWrapper}>
          <a href="https://www.linkedin.com/in/jonathanchoi594">
            <img src={`${process.env.PUBLIC_URL}/images/social/linkedin.png`} alt={'LinkedIn icon'} />
          </a>
          <a href="https://github.com/jisung594">
            <img src={`${process.env.PUBLIC_URL}/images/social/github.png`} alt={'Github icon'} />
          </a>
        </div>
        <div className={styles.contactInfoWrapper}>
          <label>CONTACT</label>
          <div className={styles.contactInfo}>
            <a href="mailto:your.email@example.com">jonjichoi@gmail.com</a>
            <a href='tel:+19786044087'>978.604.4087</a>
          </div>
        </div>
      </div>
      <div className={styles.copyrightWrapper}>
        <p>&copy; 2025 Jonathan Choi. All Rights Reserved.</p>
      </div>
    </div>
  );
}

export default Footer;
