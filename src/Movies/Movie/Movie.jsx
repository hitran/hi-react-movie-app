import React from 'react';
import styles from './Movie.module.scss';
import {IMG_PATH} from '../../configurations/config';

export default function Movie(props) {
    return(
        <div className={styles.movie}>
            <img src={`${IMG_PATH}/${props.poster_path}`}/>
            <p>{props.title}</p>
            <p>Release Date: {props.release_date}</p>
        </div>
    )
}