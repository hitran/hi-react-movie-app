import React, { useEffect, useState } from 'react';
import styles from './Movies.module.scss';
import { Link } from 'react-router-dom';
import Movie from './Movie/Movie';

export default function Movies(props) {
    const [currentPage, setCurrentPage] = useState(1)
    const [leftPosition, setLeftPosition] = useState(0);
    const [slideshowWidth, setSlideshowWidth] = useState(0)
    const movieSlideshow = React.createRef();
    let movies = [];

    useEffect(() => {
        if (props.data.length === 0) {
            props.getMoviesList(props.data, currentPage);
        }

        if (movieSlideshow && movieSlideshow.current) {
            setSlideshowWidth(movieSlideshow.current.offsetWidth);
        }
    }, [movieSlideshow])

    const onLoadingMore = () => {
        setCurrentPage(currentPage + 1)
        props.getMoviesList(props.data, currentPage + 1);
    }
    
    const updateLeftPosition = (type) => {
        let newPos = leftPosition
        //console.log(movieSlideshow.current.offsetWidth);
        console.log(slideshowWidth, newPos)
        if (type === "prev") {
            setLeftPosition(newPos + 200)
        } else {
            setLeftPosition(newPos - 200)
        }
        
    }

    if (props.data) {
        const data = [...props.data]
        movies = data.map((movie, i) => (
            <Link key={i} to={`/movie/${movie.id}`}>
                <Movie {...movie} />
            </Link>
        ))
    }

    return (
        <div>
            <h1>Popular</h1>
            <div className={styles.moviesWrapper}>
                <div ref={movieSlideshow} style={{left: leftPosition}}>
                    {movies}
                </div>
            </div>

            <button disabled={leftPosition === 0} onClick={() => updateLeftPosition('prev')}>prev</button>
            <button disabled={leftPosition === -(slideshowWidth - 400)} onClick={() => updateLeftPosition('next')}>next</button>
            <button className={styles.loadMore} onClick={onLoadingMore}>Load More</button>
        </div>
    )
}