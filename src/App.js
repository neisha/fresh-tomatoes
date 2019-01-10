import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import MovieList from './MovieList';
import Spinner from './Spinner';

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

export default App;
