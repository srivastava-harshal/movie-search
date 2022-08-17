import * as M from "../constants/movieTypes";

export const fetchMovies = (data) => ({
  type: M.FETCH_MOVIES_REQUESTED,
  payload: data,
});

export const fetchMovie = (data) => ({
  type: M.FETCH_MOVIE_REQUESTED,
  payload: data,
});
