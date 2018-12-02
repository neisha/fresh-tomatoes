import React, { Component } from 'react';
import './App.css';

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
    const movieElements = this.state.movies.map((movie) => {
      return (
        <li key={movie.id}>{movie.title}</li>
      );
    });

    return (
      <div className="App">
        <h1>Movies to expand the mind</h1>
        <ul>{movieElements}</ul>
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
