import React from 'react';

import Aux from 'hoc/ReactAux';
import NavBar from 'components/Navigation/NavBar/Navbar';
import Feed from 'components/Feed/Feed';
import Footer from 'components/Layout/Footer/Footer';

import styles from './Layout.module.css'

const layout = (props) => (
    <Aux>
        <div className={styles.layout}>
            <NavBar user={props.user}/>
            <main className={styles.content}>
                <Feed />
            </main>
            <Footer />
        </div>
    </Aux>
);

export default layout;