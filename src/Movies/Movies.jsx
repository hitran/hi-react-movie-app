import React, { useEffect, useState } from 'react';
import styles from './Movies.module.scss';
import { Link } from 'react-router-dom';
import Movie from '../Movie/Movie';
import Slideshow from '../common/Slideshow/Slideshow';
import { BACKDROP_PATH } from '../configurations/config';

export default function Movies(props) {
    const [topRatedMovie, setTopRatedMovie] = useState({});
    const [topRatedMovieList, setTopRatedMovieList] = useState([]);
    const [popularMovieList, setPopularMovieList] = useState([]);

    const generateRandomNumber = () => {
        return Math.floor(Math.random() * 10);
    }
    const truncateText = (text) => {
        if (text) {
            const words = text.split(' ');
            if (words.length > 30) {
                return words.slice(0, 30).join(' ') + '...'
            } else {
                return text
            }
        }
    }
    useEffect(() => {
        props.getMoviesList();
        if (props.data) {
            setTopRatedMovie(props.data.topRatedMovies[generateRandomNumber()])
            const popularMovies = props.data.popularMovies.map((movie, i) => (
                <Link key={i} to={`/movie/${movie.id}`}>
                    <Movie {...movie} />
                </Link>
            ))
            setPopularMovieList(popularMovies)

            // update top rated movies here
            const topRatedMovies = props.data.topRatedMovies.map((movie, i) => (
                <Link key={i} to={`/movie/${movie.id}`}>
                    <Movie {...movie} />
                </Link>
            ))
            setTopRatedMovieList(topRatedMovies)
        }
    }, [props.data.topRatedMovies.length])

    return (
        <div>
            {topRatedMovie ?
                <div className={styles.mainPoster} style={{ backgroundImage: `url(${BACKDROP_PATH}/${topRatedMovie.backdrop_path})` }}>
                    <div className={styles.mainPosterInfo}>
                        <h1>{topRatedMovie.original_title}</h1>
                        <p>{truncateText(topRatedMovie.overview)}</p>
                        <button><Link to={`/movie/${topRatedMovie.id}`}>View More</Link></button>
                    </div>
                </div>
                : null
            }
            <h1 className="pageHeader">Popular</h1>
            <Slideshow movies={topRatedMovieList} />
            <h1 className="pageHeader">Top Rated</h1>
            <Slideshow movies={popularMovieList} />
        </div>
    )
}