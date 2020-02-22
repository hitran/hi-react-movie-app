import React, { useEffect, useState } from 'react';
import styles from './Movies.module.scss';
import { Link } from 'react-router-dom';
import Movie from './Movie/Movie';
import Slideshow from '../common/Slideshow/Slideshow';

export default function Movies(props) {
    const [currentPage, setCurrentPage] = useState(1);
    let popularMovies = [];
    let latestMovies = [];
    let topRatedMovies = [];

    useEffect(() => {
        if (props.data.length === 0) {
            props.getPopularMoviesList(props.data, currentPage);
            // get popular movies here
            // get top rated movies here
            
        }
    }, [])

    const onLoadingMore = () => {
        setCurrentPage(currentPage + 1)
        props.getMoviesList(props.data, currentPage + 1);
        // loading more for top rated & latest movies
    }

    if (props.data) {
        const data = [...props.data]
        popularMovies = data.map((movie, i) => (
            <Link key={i} to={`/movie/${movie.id}`}>
                <Movie {...movie} />
            </Link>
        ))
        // update latestMovies here
        latestMovies = data.map((movie, i) => (
            <Link key={i} to={`/movie/${movie.id}`}>
                <Movie {...movie} />
            </Link>
        ))

        // update top rated movies here
    }

    return (
        <div>
            <h1>Latest</h1>
            <Slideshow movies={popularMovies} />
            <button className={styles.loadMore} onClick={onLoadingMore}>View More</button>
            <h1>Popular</h1>
            <Slideshow movies={popularMovies} />
            <button className={styles.loadMore} onClick={onLoadingMore}>View More</button>
            <h1>Top Rated</h1>
            <Slideshow movies={popularMovies} />
            <button className={styles.loadMore} onClick={onLoadingMore}>View More</button>
        </div>
    )
}