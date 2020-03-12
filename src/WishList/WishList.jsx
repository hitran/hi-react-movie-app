import React, { useState, useEffect } from 'react';
import styles from './WishList.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faSearch } from "@fortawesome/free-solid-svg-icons";
import { IMG_PATH } from '../configurations/config';
import { useHistory } from 'react-router-dom';

export default function WishList(props) {
    const [search, setSearch] = useState('')
    const [wishList, setWishList] = useState([]);
    const data = {...props.data};
    const history = useHistory();
    const goToMovieDetails = (id) => {
        setTimeout(history.push(`/movie/${id}`), 3000);
    }
    const getWishList = (data) => {
        let newWishList = [];
        if (data && data.wishList && data.wishList.length > 0) {
            newWishList = data.wishList.map((movie, id) =>
                (
                    <tr key={id}>
                        <td onClick={() => goToMovieDetails(movie.id)} className={styles.desktopOnly}><img src={`${IMG_PATH}/${movie.poster_path}`} alt="movie poster"/></td>
                        <td onClick={() => goToMovieDetails(movie.id)}>{movie.original_title}</td>
                        <td className={styles.desktopOnly}>{movie.runtime} mins</td>
                        <td className={styles.desktopOnly}>{movie.vote_average} / 10</td>
                        <td><a onClick={() => removeFromWishList(id)}><FontAwesomeIcon icon={faTrash} /></a></td>
                    </tr>
                ))
        }
        setWishList(newWishList);
    }
    const removeFromWishList = (id) => {
        if (data.wishList && data.wishList.length > 0) {
            data.wishList.splice(id, 1);
            props.updateUserInfo(data)
        }
        getWishList(data)
    }
    const onSearchChange = (e) => {
        const query = e.target.value;
        setSearch(query);
        const filteredWishList = data.wishList.filter(movie => movie.original_title.toLowerCase().includes(query.toLowerCase()));
        let newWishList = []
        if (filteredWishList.length > 0) {
            newWishList = filteredWishList.map((movie, id) =>
                (
                    <tr key={id}>
                        <td onClick={() => goToMovieDetails(movie.id)}className={styles.desktopOnly}><img src={`${IMG_PATH}/${movie.poster_path}`} alt="movie poster" /></td>
                        <td onClick={() => goToMovieDetails(movie.id)}>{movie.original_title}</td>
                        <td className={styles.desktopOnly}>{movie.runtime} mins</td>
                        <td className={styles.desktopOnly}>{movie.vote_average} / 10</td>
                        <td><a onClick={() => removeFromWishList(id)}><FontAwesomeIcon icon={faTrash} /></a></td>
                    </tr>
                ))
        } else {
            newWishList.push(<tr key="0">
                <td className={styles.desktopOnly}></td>
                <td>No Result Found!</td>
                <td className={styles.desktopOnly}></td>
                <td className={styles.desktopOnly}></td>
                <td></td>
            </tr>)
        }
        setWishList(newWishList);
    }
    useEffect(() => {
        // get default wish list from user info once signed in
        getWishList(props.data)
    }, [props.data])


    return (
        wishList.length > 0 ?
            <div className={styles.wishListWrapper}>
                <h1 className={styles.title}>WISH LIST</h1>
                {/* filter */}
                <form className={styles.filter}>
                    <FontAwesomeIcon icon={faSearch} />
                    <input type="text" value={search} onChange={onSearchChange} placeholder="search in wish list..." />
                </form>
                {/* wish list*/}
                <table>
                    <thead>
                        <tr>
                            <th className={styles.desktopOnly}></th>
                            <th>TITLE</th>
                            <th className={styles.desktopOnly}>DURATION</th>
                            <th className={styles.desktopOnly}>RATING</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {wishList}
                    </tbody>
                </table>
            </div> :
            <div className={styles.wishListWrapper}>
                <h1 className={styles.title}>Your Wish List</h1>
                <p>YOUR WISH LIST IS EMPTY!</p>
            </div>
    )
};