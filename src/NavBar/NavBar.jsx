import React, { useContext, useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import styles from './NavBar.module.scss';
import { DataContext } from '../Context/Context';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faSearch} from '@fortawesome/free-solid-svg-icons';
import {useHistory} from 'react-router-dom';
import {Badge} from 'antd';


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
                        <NavLink to="/"><img className={styles.logo} src="https://www.themoviedb.org/assets/2/v4/logos/primary-green-d70eebe18a5eb5b166d5c1ef0796715b8d1a2cbc698f96d311d62f894ae87085.svg"/></NavLink>
                    </li>
                    <li>
                    <Badge dot>
                        <NavLink to="/my-wish-list">My Wish List
                        {/* <span className={props.data && props.data.wishList.length > 0 ? styles.notification : ''}>{props.data.wishList.length > 0 ? props.data.length : null}</span>*/}</NavLink>
                    </Badge>
                    </li>
                    {/* <li><button className={styles.changeTheme} onClick={onChangeTheme}>Change Theme</button></li> */}
                    {/* <li>
                        <NavLink to="/documentation">Documentation</NavLink>
                    </li> */}
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