import { combineReducers } from "redux";
import { movieReducer } from "./movieReducer";
import { singleMovieReducer } from "./movieReducer";

const rootReducer = combineReducers({
  movies: movieReducer,
  movie: singleMovieReducer,
});

export default rootReducer;
