import React from 'react';
import styles from './Login.module.scss';
import googleBtn from '../assets/btn_google_light_normal.png';

export default function Login(props) {
    const onLogin = async () => {
        props.login();
    }
    
    const onLogout = async() => {
        props.logout();
    }

    return (
        <div className={styles.signInWrapper}>
            <img className={styles.logo} src="https://www.themoviedb.org/assets/2/v4/logos/primary-green-d70eebe18a5eb5b166d5c1ef0796715b8d1a2cbc698f96d311d62f894ae87085.svg"/>
            <h3>The Movie DB</h3>
            {props.data ? <button className={styles.logoutButton} onClick={onLogout}>Logout</button> : <div onClick={onLogin} className ={styles.loginButton} alt="sign_in_button"></div>}
        </div>
    )
}