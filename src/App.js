import React, { Component } from 'react';
import './App.css';
import MovieList from './MovieList.js'
import Spinner from './Spinner.js'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      movies: [],
      errorMsg: '',
    };
  }

  handleClick = () => {
    // TODO: disable button when loading
    this.setState(
      {
        loading: true,
        movies: [],
        errorMsg: '',
      });
    setTimeout(() => { // TODO: remove debug code
      getMoviesFromApiAsync()
        .then((movies) => {
            this.setState({
              movies: movies,
              errorMsg: '',
              loading: false,
            });
        })
        .catch((error) => {
          this.setState({
            movies: [],
            errorMsg: 'Loading movies failed. Please try again later.',
            loading: false,
          });
        });
    }, 1000);
  }

  render() {
    return (
      <div className="App">
        <h1>Movies to expand the mind</h1>
        <button onClick={this.handleClick}>Load Movies</button>
        {
          this.state.loading ? 
          <Spinner /> :
          !this.state.errorMsg ? 
          <MovieList movies={this.state.movies} /> :
          <div className="error">{this.state.errorMsg}</div>
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
