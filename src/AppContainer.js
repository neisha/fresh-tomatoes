import { moviesRequest, moviesSuccess, moviesFailure } from './actions';
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
};

const AppContainer = connect(mapStateToProps, mapDispatchToProps)(App);

export default AppContainer;
