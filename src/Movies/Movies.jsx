import React, { useEffect, useState } from 'react';
import styles from './Movies.module.scss';
import { Link } from 'react-router-dom';
import Movie from '../Movie/Movie';
import Slideshow from '../common/Slideshow/Slideshow';

export default function Movies(props) {
    const [currentPage, setCurrentPage] = useState(1);
    let popularMovies = [];
    let topRatedMovies = [];

    useEffect(() => {
        if (props.data) {
            props.getMoviesList(props.data, currentPage);
        }
    }, [])

    if (props.data) {
        const data = {...props.data}
        popularMovies = data.popularMovies.map((movie, i) => (
            <Link key={i} to={`/movie/${movie.id}`}>
                <Movie {...movie} />
            </Link>
        ))

        // update top rated movies here
        topRatedMovies = data.topRatedMovies.map((movie, i) => (
            <Link key={i} to={`/movie/${movie.id}`}>
                <Movie {...movie} />
            </Link>
        ))
    }

    return (
        <div>
            <h1 className="pageHeader">Popular</h1>
            <Slideshow movies={popularMovies} />
            <h1 className="pageHeader">Top Rated</h1>
            <Slideshow movies={topRatedMovies} />
        </div>
    )
}