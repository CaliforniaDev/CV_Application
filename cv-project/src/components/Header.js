import React from 'react';
import styles from '../styles/Header.module.scss';

class Header extends React.Component {
    render() {
        return(
            <div className={styles.mainHeaderWrapper}>
                <h1>CV Application</h1>
            </div>
        )
    }
}
export default Header;