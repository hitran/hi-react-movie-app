import React, { useState } from 'react';
import { useEffect } from 'react';
import styles from './Slideshow.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

export default function Slideshow(props) {
    const [leftPosition, setLeftPosition] = useState(0);
    const [slideshowWidth, setSlideshowWidth] = useState(0);
    const movieSlideshow = React.createRef();

    useEffect(() => {
        if (movieSlideshow && movieSlideshow.current) {
            setSlideshowWidth(movieSlideshow.current.offsetWidth);
        }
    }, [movieSlideshow])

    const updateLeftPosition = (type) => {
        let newPos = leftPosition
        if (type === "prev") {
            setLeftPosition(newPos + 700)
        } else {
            setLeftPosition(newPos - 700)
        }

    }
    return (
        <div className={styles.slideshowWrapper}>
            <button className={styles.slideshowControls} disabled={leftPosition === 0} onClick={() => updateLeftPosition('prev')}>
                <FontAwesomeIcon icon={faChevronLeft} />
            </button>
            <div className={styles.moviesWrapper}>
                <div ref={movieSlideshow} style={{ left: leftPosition }}>
                    {props.movies}
                </div>
            </div>
            <button className={styles.slideshowControls} disabled={leftPosition === -(slideshowWidth - 700)} onClick={() => updateLeftPosition('next')}>
                <FontAwesomeIcon icon={faChevronRight} />
            </button>
        </div>
    )
}