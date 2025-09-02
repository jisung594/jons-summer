import React, { useState } from 'react';
import styles from './Footer.module.css';

export const Footer = ({
  ...props
}) => {

  return (
    <div className={styles.footer}>


        <div className={styles.footerContent}>
            <div className={styles.socialMediaWrapper}>
                <img src={'../../images/social/linkedin.png'} alt={'LinkedIn icon'} />
                <img src={'../../images/social/github.png'} alt={'Github icon'} />
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
