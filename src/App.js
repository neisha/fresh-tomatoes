import React, { Component } from 'react';
import './App.css';
import MovieList from './MovieList.js'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: [],
    };
  }

  componentWillMount() {
    getMoviesFromApiAsync()
      .then((movies) => {
        this.setState({movies: movies});
      });
      // TODO: error handling
  }

  render() {
    return (
      <div className="App">
        <h1>Movies to expand the mind</h1>
        <MovieList movies={this.state.movies} />
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
    });
}

export default App;
