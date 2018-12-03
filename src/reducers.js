import { combineReducers } from 'redux';
import { MOVIES_REQUEST, MOVIES_SUCCESS, MOVIES_FAILURE } from './actions';

// Reducers
const movies = (
  state = [], 
  action
) => {
  switch (action.type) {        
    case MOVIES_SUCCESS:
      return action.movies;
    case MOVIES_REQUEST:
    case MOVIES_FAILURE:
      return [];
    default:
      return state;
  }
};

const isLoading = (
  state = false, 
  action
) => {
  switch (action.type) {        
    case MOVIES_REQUEST:
      return true;
    case MOVIES_SUCCESS:
    case MOVIES_FAILURE:
      return false;
    default:
      return state;
  }
};

const errorMsg = (
  state = '', 
  action
) => {
  switch (action.type) {        
    case MOVIES_FAILURE:
      return action.message;
    case MOVIES_REQUEST:
    case MOVIES_FAILURE:
      return '';
    default:
      return state;
  }
};

export default combineReducers({
  movies,
  isLoading,
  errorMsg,
});
