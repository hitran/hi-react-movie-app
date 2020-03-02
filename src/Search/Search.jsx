import React, {useState, useEffect} from 'react';
import styles from './Search.module.scss';
import MoviesGrid from '../common/MoviesGrid/MoviesGrid';

export default function Search(props){

    return (
        <MoviesGrid movies = {props.data}/>
    )
}