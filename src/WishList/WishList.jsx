import React from 'react';
import styles from './WishList.module.scss';

export default function WishList(props) {
    const data = props.data;
    let wishList = []
    if (data.length > 0) {
        wishList = data.map(movie =>
            (
                <tr>
                    <td>{movie.original_title}</td>
                    <td>{movie.runtime}</td>
                    <td>{movie.vote_average}</td>
                </tr>
            ))
    } 
    return (
        wishList.length > 0 ?
        <div className={styles.wishListWrapper}>
            <table>
                <thead>
                    <th>Movie</th>
                    <th>Rating</th>
                    <th>Duration</th>
                </thead>
                <tbody>
                    {wishList}
                </tbody>
            </table>
        </div> :
        <div className={styles.wishListWrapper}>
            <p>YOUR WISH LIST IS EMPTY!</p>
        </div>
    )
};