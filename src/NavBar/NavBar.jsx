import React, {useContext} from 'react';
import {NavLink} from 'react-router-dom';
import styles from './NavBar.module.scss';
import {DataContext} from '../Context/Context';
const NavBar = () => {
    const dataContext = useContext(DataContext)
    const onChangeTheme = () => {
        dataContext.toggleTheme()
    }
    return (
        <div className = {styles.NavBar}>
            <div>
                <ul>
                    <li>
                        <NavLink to="/">Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/">Popular</NavLink>
                    </li>
                    <li>
                        <NavLink to="/my-wish-list">My Wish List</NavLink>
                    </li>
                    <li><button className={styles.changeTheme} onClick={onChangeTheme}>Change Theme</button></li>
                </ul>
            </div>
        </div>
    )
}

export default NavBar;