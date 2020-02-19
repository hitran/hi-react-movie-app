import React from 'react';
import styles from './WishList.module.scss';

export default function WishList(props) {
    const data = props.data;
    let wishList = [
        <tr>
            <td>Test 1</td>
            <td className={styles.desktopOnly}>120 mins</td>
            <td className={styles.desktopOnly}>8 / 10</td>
            <td><a>Remove</a></td>
        </tr>,
        <tr>
            <td>Test 2</td>
            <td className={styles.desktopOnly}>126 mins</td>
            <td className={styles.desktopOnly}>8 / 10</td>
            <td><a>Remove</a></td>
        </tr>,
        <tr>
        <td><span>This is a very very very long name just for testing</span></td>
        <td className={styles.desktopOnly}>126 mins</td>
        <td className={styles.desktopOnly}>8 / 10</td>
        <td><a>Remove</a></td>
    </tr>
    ]
    if (data.length > 0) {
        wishList = data.map((movie, id) =>
            (
                <tr key={id}>
                    <td>{movie.original_title}</td>
                    <td className={styles.desktopOnly}>{movie.runtime} mins</td>
                    <td className={styles.desktopOnly}>{movie.vote_average} / 10</td>
                    <td><a>Remove</a></td>
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