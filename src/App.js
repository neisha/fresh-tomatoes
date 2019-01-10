import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import MovieList from './MovieList';
import Spinner from './Spinner';

class App extends Component {
  timerHandle = null;

  handleClick = () => {
    this.props.moviesRequest();
    if(this.timerHandle != null) {
      clearInterval(this.timerHandle);
    }
    
    getMoviesFromApiAsync()
      .then((movies) => {
          this.props.moviesSuccess(movies);
          this.timerHandle = setInterval(() => {
            this.getMovieRatings();
          }, 1000);
      })
      .catch((error) => {
        this.props.moviesFailure("You can't handle the movies!");
      });      
  }

  getMovieRatings = () => {
    getMovieRatingsAsync()
        .then((movieRatings) => {
            this.props.movieRatingsSuccess(movieRatings);
        })
        .catch((error) => {
          console.log(error);
        });
  }

  render() {
    return (
      <div className="App">
        <img className="Logo" src={logo} />
        <button className="Button" onClick={this.handleClick} disabled={this.props.isLoading}>I want the movies</button>
        {
          this.props.isLoading ? 
          <Spinner /> :
          !this.props.errorMsg ? 
          <MovieList movies={this.props.movies} /> :
          <div className="ErrorMsg">{this.props.errorMsg}</div>
        }        
      </div>
    );
  }
}

function getMoviesFromApiAsync() {
  return fetch('https://facebook.github.io/react-native/movies.json')
    .then((response) => response.json())
    .then((responseJson) => {
      return responseJson.movies;
    })
    .catch((error) => {
      console.error(error);
      throw error;
    });
}

function getMovieRatingsAsync() {
  return fetch('https://5qa9n3wyc8.execute-api.ap-southeast-2.amazonaws.com/default/averageratings')
    .then((response) => response.json())
    .catch((error) => {
      console.error(error);
      throw error;
    });
}

export default App;
