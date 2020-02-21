import React, { useEffect, useState } from 'react';
import styles from './Movies.module.scss';
import { Link } from 'react-router-dom';
import Movie from './Movie/Movie';

export default function Movies(props) {
    const [currentPage, setCurrentPage] = useState(1)
    let movies = [];

    useEffect(() => {
        if (props.data.length === 0) {
            props.getMoviesList(props.data, currentPage);
        }
    },[])

    const onLoadingMore = () => {
        setCurrentPage(currentPage + 1)
        props.getMoviesList(props.data, currentPage + 1);
    }

    if (props.data) {
        const data = [ ...props.data ]
        movies = data.map((movie, i) => (
            <Link key={i} to={`/movie/${movie.id}`}>
                <Movie {...movie} />
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