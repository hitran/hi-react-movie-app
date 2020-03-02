import React, { useContext, useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import styles from './NavBar.module.scss';
import { DataContext } from '../Context/Context';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faSearch} from '@fortawesome/free-solid-svg-icons';
import {useHistory} from 'react-router-dom';
const NavBar = (props) => {
    const [isScrolling, setIsScrolling] = useState(false);
    const [search, setSearch] = useState('');
    const history = useHistory();
    const dataContext = useContext(DataContext)
    const onChangeTheme = () => {
        dataContext.toggleTheme()
    }
    const onSearchChange = (e) => {
        const query = e.target.value;
        setSearch(query);
        if (query.length > 5) {
            props.searchMovies(query);
            history.push('/search')
        }
        
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
                        <NavLink to="/">Top Rated</NavLink>
                    </li>
                    <li>
                        <NavLink to="/my-wish-list">My Wish List
                        <span className={props.data.length > 0 ? styles.notification : ''}>{props.data.length > 0 ? props.data.length : null}</span></NavLink>
                    </li>
                    <li><button className={styles.changeTheme} onClick={onChangeTheme}>Change Theme</button></li>
                </ul>
                <ul className={styles.pullRight}>
                    <li>
                        <form className={styles.search}>
                            <FontAwesomeIcon icon={faSearch} />
                            <input type="text" value={search} onChange={onSearchChange} placeholder="search movie title..." />
                        </form>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default NavBar;