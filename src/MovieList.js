import React from 'react';

export default function MovieList(props) {
    return (
        <ul>{props.movies.map((movie) => <li key={movie.id}>{movie.title}</li>)}</ul>
    );
}