import React, { useEffect, useState } from 'react';
import styles from './Movies.module.scss';
import { Link } from 'react-router-dom';
import Movie from '../Movie/Movie';

export default function Movies(props) {
    const [currentPage, setCurrentPage] = useState(1)
    let movies = [];

    useEffect(() => {
        props.getMoviesList(props.data, currentPage);
    },[currentPage])

    const onSelectMovie = (movie) => {

    }
    const onLoadingMore = () => {
        setCurrentPage(currentPage + 1)
    }

    if (props.data) {
        const data = [ ...props.data ]
        console.log(data)
        movies = data.map((movie, i) => (
            <Link to={`/movie/${movie.id}`}>
                <Movie {...movie} key={i} onClick={() => onSelectMovie(movie)}/>
            </Link>
        ))
    }

    return (
        <div>
            <div className={styles.moviesWrapper}>
            {movies}
            </div>
            <button className={styles.loadMore} onClick={onLoadingMore}>Load More</button>
        </div>
    )
}