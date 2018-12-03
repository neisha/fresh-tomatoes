import React, { Component } from 'react';
import './App.css';
import MovieList from './MovieList.js';
import Spinner from './Spinner.js';

class App extends Component {
  handleClick = () => {
    this.props.moviesRequest();
    
    getMoviesFromApiAsync()
      .then((movies) => {
          this.props.moviesSuccess(movies);
      })
      .catch((error) => {
        this.props.moviesFailure("You can't handle the movies!");
      });
  }

  render() {
    return (
      <div className="App">
        <h1>Movies to expand the mind</h1>
        <button onClick={this.handleClick} disabled={this.props.isLoading}>Load Movies</button>
        {
          this.props.isLoading ? 
          <Spinner /> :
          !this.props.errorMsg ? 
          <MovieList movies={this.props.movies} /> :
          <div className="error">{this.props.errorMsg}</div>
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

export default App;
