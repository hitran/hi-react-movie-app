import React, {useContext} from 'react';
import {DataContext} from '../Context/Context';
import './Canvas.scss';

export default function Canvas(props) {
    const dataContext = useContext(DataContext);
    return (
        <div className={`Canvas ${dataContext.theme === "dark" ? "Dark" : "Light"}`}>
            {props.children}
        </div>
    )
}