import React, { useEffect, useState } from 'react';
import styles from './Movies.module.scss';
import { Link } from 'react-router-dom';
import Movie from './Movie/Movie';
import Slideshow from '../common/Slideshow/Slideshow';

export default function Movies(props) {
    const [currentPage, setCurrentPage] = useState(1);
    let popularMovies = [];

    useEffect(() => {
        if (props.data.length === 0) {
            props.getMoviesList(props.data, currentPage);
        }
    }, [])

    const onLoadingMore = () => {
        setCurrentPage(currentPage + 1)
        props.getMoviesList(props.data, currentPage + 1);
    }

    if (props.data) {
        const data = [...props.data]
        popularMovies = data.map((movie, i) => (
            <Link key={i} to={`/movie/${movie.id}`}>
                <Movie {...movie} />
            </Link>
        ))
    }

    return (
        <div>
            <h1>Popular</h1>
            <Slideshow movies={popularMovies}/>
            <button className={styles.loadMore} onClick={onLoadingMore}>View More</button>
        </div>
    )
}