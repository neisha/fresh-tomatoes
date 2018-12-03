import React from 'react';
import MovieIcon from './movie.svg'
import './MovieList.css';

export default function MovieList(props) {
    return (
        <ul className="MovieList">{props.movies.map((movie) => (
            <li className="Movie" key={movie.id}>
                <img className="Movie__image" src={MovieIcon} />
                <div className="Movie__title">{movie.title}</div>
            </li>
            )
        )}</ul>
    );
}