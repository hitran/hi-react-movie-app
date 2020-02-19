import React, { useEffect, useState } from 'react';
import styles from './MovieDetails.module.scss';
import { useParams } from 'react-router-dom';
import { IMG_PATH, BACKDROP_PATH } from '../configurations/config';

export default function MovieDetails(props) {
    const [addedToWishList, setAddedToWishList] = useState(false);
    const params = useParams();
    useEffect(() => {
        props.getMovieDetails(params.movieId);
        if (props.wishList.length > 0) {
            const i = props.wishList.findIndex(movie => movie.id === parseInt(params.movieId, 10));
            if (i !== -1) {
                setAddedToWishList(true);
            }
        }
    }, [params.movieId])

    // Generate random color for movie genres
    let genres = [];

    const getRandomColor = (i) => {
        const colors = ['#f67280', '#c06c84', '#f8b195', '#6c567b'];
        return colors[Math.floor(i % 4)];
    }

    if (props.data) {
        genres = props.data.genres.map((g, i) => <span key={i} className={styles.genres} style={{ backgroundColor: `${getRandomColor(i)}` }}>{g.name}</span>)
    } else {
        genres = []
    }

    // Add to wish list
    const addToWishList = (data) => {
        const newWishList = [...props.wishList, data]
        props.addToWishList(newWishList);
        setAddedToWishList(true)
    }

    return (
        props.data ?
            <div data-test="component-movie-details" className={styles.movieDetails} style={{ backgroundImage: `url(${BACKDROP_PATH}/${props.data.backdrop_path})` }}>
                <div>
                    <div className={`${styles.poster} ${styles.desktop}`}>
                        <img src={`${IMG_PATH}/${props.data.poster_path}`} alt="poster" />
                    </div>
                    {/* details */}
                    <div className={styles.details}>
                        <div className={styles.detailsHeader}>
                            <div>
                                <h1>{props.data.original_title}</h1>
                                <h3 className={styles.header}>{props.data.tagline}</h3>
                                <button disabled={addedToWishList ? true : false} onClick={() => addToWishList(props.data)} className={styles.addToWishList}>{addedToWishList ? 'ADDED ' : '+ '}<span>TO WISH LIST</span></button>
                            </div>
                            <div className={`${styles.poster} ${styles.mobile}`}>
                                <img src={`${IMG_PATH}/${props.data.poster_path}`} alt="poster" />
                            </div>
                        </div>
                        <p>{props.data.overview}</p>
                        <h3>{genres}</h3>
                        <div>
                            <div>
                                <h4>Original Release:</h4>
                                <h3 className={styles.header}>{props.data.release_date}</h3>
                            </div>
                            <div>
                                <h4>Running Time: </h4>
                                <h3 className={styles.header}>{props.data.runtime} mins</h3>
                            </div>
                            <div>
                                <h4>Box Office:</h4>
                                <h3 className={styles.header}>${props.data.revenue.toLocaleString()}</h3>
                            </div>
                            <div>
                                <h4>Vote Average: </h4>
                                <h3 className={styles.header}>{props.data.vote_average} / 10</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div> : null
    )
}