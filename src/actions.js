// Action types
export const MOVIES_REQUEST = 'MOVIES_REQUEST';
export const MOVIES_SUCCESS = 'MOVIES_SUCCESS';
export const MOVIES_FAILURE = 'MOVIES_FAILURE';

// Action creators
export const moviesRequest = () => ({
  type: MOVIES_REQUEST,
});

export const moviesSuccess = (movies) => ({
  type: MOVIES_SUCCESS,
  movies,    
});

export const moviesFailure = (message) => ({
  type: MOVIES_FAILURE,
  message,
});
