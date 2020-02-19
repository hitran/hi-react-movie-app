import React, {useEffect} from 'react';
import styles from './WishList.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faTrash} from "@fortawesome/free-solid-svg-icons";

export default function WishList(props) {
    const data = props.data;
    const removeFromWishList = (id) => {
        if (data.length > 0) {
            data.splice(id, 1);
            props.removeFromWishList(data)
        }
    }
    let wishList = [];
    if (data.length > 0) {
        wishList = data.map((movie, id) =>
            (
                <tr key={id}>
                    <td>{movie.original_title}</td>
                    <td className={styles.desktopOnly}>{movie.runtime} mins</td>
                    <td className={styles.desktopOnly}>{movie.vote_average} / 10</td>
                    <td><a onClick={() => removeFromWishList(id)}><FontAwesomeIcon icon={faTrash} /></a></td>
                </tr>
            ))
    }

    return (
        wishList.length > 0 ?
            <div className={styles.wishListWrapper}>
                <h1 className={styles.title}>WISH LIST</h1>
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