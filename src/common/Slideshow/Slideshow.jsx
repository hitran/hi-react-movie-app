import React, {useState} from 'react';
import { useEffect } from 'react';
import styles from './Slideshow.module.scss';

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
            setLeftPosition(newPos + 200)
        } else {
            setLeftPosition(newPos - 200)
        }

    }
    return (
        <div className={styles.slideshowWrapper}>
                <button disabled={leftPosition === 0} onClick={() => updateLeftPosition('prev')}>prev</button>
                <div className={styles.moviesWrapper}>
                    <div ref={movieSlideshow} style={{ left: leftPosition }}>
                        {props.movies}
                    </div>
                </div>
                <button disabled={leftPosition === -(slideshowWidth - 400)} onClick={() => updateLeftPosition('next')}>next</button>
        </div>
    )
}