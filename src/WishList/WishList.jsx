import React, {useState, useEffect} from 'react';
import styles from './WishList.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faSearch } from "@fortawesome/free-solid-svg-icons";

export default function WishList(props) {
    const [search, setSearch] = useState('')
    const [wishList, setWishList] = useState([]);
    const data = props.data;
    const removeFromWishList = (id) => {
        if (data.length > 0) {
            data.splice(id, 1);
            props.removeFromWishList(data)
        }
    }
    const onSearchChange = (e) => {
        console.log(e.target.value);
        const query = e.target.value;
        setSearch(query);
        const filteredWishList = data.filter(movie => movie.original_title.toLowerCase().includes(query.toLowerCase()));
        let newWishList = []
        if (filteredWishList.length > 0) {
            newWishList = filteredWishList.map((movie, id) =>
                (
                    <tr key={id}>
                        <td>{movie.original_title}</td>
                        <td className={styles.desktopOnly}>{movie.runtime} mins</td>
                        <td className={styles.desktopOnly}>{movie.vote_average} / 10</td>
                        <td><a onClick={() => removeFromWishList(id)}><FontAwesomeIcon icon={faTrash} /></a></td>
                    </tr>
                ))
        } else {
            newWishList.push(<tr>
                <td>No Result Found!</td>
                <td className={styles.desktopOnly}></td>
                <td className={styles.desktopOnly}></td>
                <td></td>
            </tr>)
        }
        setWishList(newWishList);
    }
    useEffect(() => {
        if (data.length > 0) {
            let newWishList = data.map((movie, id) =>
                (
                    <tr key={id}>
                        <td>{movie.original_title}</td>
                        <td className={styles.desktopOnly}>{movie.runtime} mins</td>
                        <td className={styles.desktopOnly}>{movie.vote_average} / 10</td>
                        <td><a onClick={() => removeFromWishList(id)}><FontAwesomeIcon icon={faTrash} /></a></td>
                    </tr>
                ))
            setWishList(newWishList);
        }
    }, [])
    

    return (
        wishList.length > 0 ?
            <div className={styles.wishListWrapper}>
                <h1 className={styles.title}>WISH LIST</h1>
                {/* filter */}
                <form>
                    <FontAwesomeIcon icon={faSearch} />
                    <input type="text" value={search} onChange={onSearchChange} placeholder="Search movie title..." />
                </form>
                {/* wish list*/}
                <table>
                    <thead>
                        <tr>
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
                <h1>Your Wish List</h1>
                <p>YOUR WISH LIST IS EMPTY!</p>
            </div>
    )
};