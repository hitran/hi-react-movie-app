import React, {useState} from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faSearch} from '@fortawesome/free-solid-svg-icons';
import styles from './Search.module.scss';

export default function Search(props){
    const [search, setSearch] = useState('')
    const onSearchChange = (e) => {
        console.log(e.target.value);
        setSearch(e.target.value);
        if (search.length > 2) {
            
        }
    }
    return (
        <form className={styles.search}>
            <FontAwesomeIcon icon={faSearch}/>
            <input type="text" value={search} onChange={onSearchChange} placeholder="search movie title..."/>
        </form>
    )
}