import React, { useContext, useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import styles from './NavBar.module.scss';
import { DataContext } from '../Context/Context';
const NavBar = (props) => {
    const [isScrolling, setIsScrolling] = useState(false);
    const dataContext = useContext(DataContext)
    const onChangeTheme = () => {
        dataContext.toggleTheme()
    }
    const navBarRef = React.createRef();
    const onScroll = (el) => {
        if (el) {
            const rect = el.getBoundingClientRect();
            if (rect.top < 0) {
                setIsScrolling(true)
            } else {
                setIsScrolling(false)
            }
        }
    }
    useEffect(() => {
        window.addEventListener('scroll', () => onScroll(navBarRef.current))
    }, [navBarRef])
    return (
        <div className={styles.NavBar} ref={navBarRef}>
            <div>
                <ul className={isScrolling ? styles.onScroll : ''}>
                    <li>
                        <NavLink to="/">Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/">Popular</NavLink>
                    </li>
                    <li>
                        <NavLink to="/">Latest</NavLink>
                    </li>
                    <li>
                        <NavLink to="/">Top Rated</NavLink>
                    </li>
                    <li>
                        <NavLink to="/my-wish-list">My Wish List
                        <span className={props.data.length > 0 ? styles.notification : ''}>{props.data.length > 0 ? props.data.length : null}</span></NavLink>
                    </li>
                    <li><button className={styles.changeTheme} onClick={onChangeTheme}>Change Theme</button></li>
                </ul>
            </div>
        </div>
    )
}

export default NavBar;