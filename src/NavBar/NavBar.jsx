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
        e.persist()
        const query = e.target.value;
        setSearch(query);
    }

    const handleKeyPress = (e) => {
        e.persist()
        let keyCode = e.keyCode || e.which;
        if (keyCode === 13) {
            e.preventDefault();
            props.searchMovies(search);
            setTimeout(history.push('/search'), 5000);
            setSearch('')
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
                        <NavLink to="/my-wish-list">My Wish List
                        {/* <span className={props.data && props.data.wishList.length > 0 ? styles.notification : ''}>{props.data.wishList.length > 0 ? props.data.length : null}</span>*/}</NavLink>
                    </li>
                    {/* <li><button className={styles.changeTheme} onClick={onChangeTheme}>Change Theme</button></li> */}
                </ul>
                <ul className={styles.pullRight}>
                    <li>
                        <form className={styles.search}>
                            <FontAwesomeIcon icon={faSearch} />
                            <input type="text" value={search} onKeyPress={handleKeyPress} onChange={onSearchChange} placeholder="search movie title..." />
                        </form>
                    </li>
                    {props.login ? <li>Welcome {props.login.name}</li> : null}
                    <li>
                        <NavLink to="/login">{props.login ? "Logout" : "Login"}</NavLink>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default NavBar;