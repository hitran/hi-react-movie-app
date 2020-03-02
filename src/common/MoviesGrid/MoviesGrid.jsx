import React from 'react';
import styles from './MoviesGrid.module.scss';
import {Link} from 'react-router-dom';
import Movie from '../../Movie/Movie';

export default function moviesGrid(props) {
    const movies = [...props.movies]
    const grid = movies.map((movie,i) => <Link key={i} to={`/movie/${movie.id}`}><Movie {...movie} /></Link>)
    return (
        <div className={styles.gridWrapper}>
            {grid}
        </div>
    )
}