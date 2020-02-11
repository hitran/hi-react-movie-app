import React, { useEffect } from 'react';
import styles from './MovieDetails.module.scss';
import { useParams } from 'react-router-dom';
import { IMG_PATH } from '../configurations/config';

export default function MovieDetails(props) {
    const params = useParams();
    useEffect(() => {
        props.getMovieDetails(params.movieId);
    }, [params.movieId])
    let genres = [];

    const getRandomColor = (i) => {
        const colors = ['#f67280', '#c06c84', '#f8b195', '#6c567b'] ;
        return colors[Math.floor(i % 4)];
    }
    if (props.data) {
        genres = props.data.genres.map((g,i) => <span className={styles.genres} style={{backgroundColor: `${getRandomColor(i)}`}}>{g.name}</span>)
    } else {
        genres = []
    }
    return (
        <div data-test="component-movie-details" className={styles.movieDetails}>
            <div>
                <img src={props.data ? `${IMG_PATH}/${props.data.poster_path}` : ''} alt="poster" />
            </div>
            {/* details */}
            <div className={styles.details}>
                <h1>{props.data ? props.data.original_title : ''}</h1>
                <hr />
                <h3>Description:</h3>
                <p>{props.data ? props.data.overview : ''}</p>
                <hr/>
                <h3>Genres: {genres}</h3>
            </div>
        </div>
    )
}