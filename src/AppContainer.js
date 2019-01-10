import { moviesRequest, moviesSuccess, moviesFailure, movieRatingsSuccess } from './actions';
import { connect } from 'react-redux';
import App from './App';

const mapStateToProps = state => ({
    movies: state.movies,
    errorMsg: state.errorMsg,
    isLoading: state.isLoading,
});

const mapDispatchToProps = {
  moviesRequest,
  moviesSuccess,
  moviesFailure,
  movieRatingsSuccess,
};

const AppContainer = connect(mapStateToProps, mapDispatchToProps)(App);

export default AppContainer;
