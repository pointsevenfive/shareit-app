import React from 'react';

import styles from './Footer.module.css'
import logo from 'assets/img/logo.png'

class Footer extends React.Component {
    render() {
        return (
            <footer className={styles.footer}>
                <img src={logo} alt="logo" />
                <p>&copy; 2020</p>
            </footer>
        );
    }
}

export default Footer;