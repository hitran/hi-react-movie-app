import React from 'react';
import styles from './MoviesGrid.module.scss';
import {Link} from 'react-router-dom';
import Movie from '../../Movie/Movie';

export default function moviesGrid(props) {
    const movies = [...props.movies]
    const grid = movies.map((movie,i) => movie.poster_path? <Link key={i} to={`/movie/${movie.id}`}><Movie {...movie} /></Link>: null)
    return (
        <div className={styles.moviesGrid}>
            {grid}
        </div>
    )
}