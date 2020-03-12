import React from 'react';
import styles from './Footer.module.scss';

export default function footer() {
    const getDate = () => {
        return new Date().getFullYear()
    }
    return(
        <div className={styles.footer}>
            <p><b>{getDate()} - Made with ReactJs</b></p>
        </div>
    )
}