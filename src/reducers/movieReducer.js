import * as M from "../constants/movieTypes";

const initialState = [];

export const movieReducer = (state = initialState, action) => {
  switch (action.type) {
    case M.FETCH_MOVIES_SUCCESS:
      return action.payload;
    case M.FETCH_MOVIES_FAILURE:
      return initialState;
    default:
      return state;
  }
};

const initialState1 = {};

export const singleMovieReducer = (state = initialState1, action) => {
  switch (action.type) {
    case M.FETCH_MOVIE_SUCCESS:
      return action.payload;
    case M.FETCH_MOVIE_FAILURE:
      return initialState1;
    default:
      return state;
  }
};
