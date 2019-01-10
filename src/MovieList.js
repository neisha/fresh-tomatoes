import React, { Component } from 'react';
import MovieIcon from './movie.svg'
import './MovieList.css';
import MovieRater from './MovieRater';

class MovieList extends Component
{
    rateMovie = (movieId, stars) => {
        const movieRating = {movie: movieId, stars: stars};
        fetch('https://5qa9n3wyc8.execute-api.ap-southeast-2.amazonaws.com/default/ratings',
            {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(movieRating),
            })            
        .catch((error) => {
            console.error(error);
            throw error;
        });
    }

    render () {
        return (
            <ul className="MovieList">{this.props.movies.map((movie) => (
                <li className="Movie" key={movie.id}>
                    <img className="Movie__image" src={MovieIcon} />
                    <div className="Movie__title">{movie.title}</div>
                    <span>{movie.rating == null ? 'No rating' : `${movie.rating} stars`}</span>
                    <MovieRater rateMovieAction={(stars) => this.rateMovie(movie.id, stars)} />
                </li>
                )
            )}</ul>
        );
    }
}

export default MovieList;