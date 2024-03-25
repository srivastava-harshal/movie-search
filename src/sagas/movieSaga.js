import axios from "axios";
import { put, takeEvery } from "redux-saga/effects";
import * as M from "../constants/movieTypes";

function* fetchMovies({ payload: { searchedMovie = "day" } = {} }) {
  try {
    const response = yield axios.get(
      `https://www.omdbapi.com/?s=${searchedMovie}&apikey=2259e0f1`
    );
    yield put({ type: M.FETCH_MOVIES_SUCCESS, payload: response.data.Search });
  } catch (err) {
    yield put({ type: M.FETCH_MOVIES_FAILURE });
  }
}

function* fetchMovie({ payload: { imdbID = "" } = {} }) {
  try {
    const response = yield axios.get(
      `https://www.omdbapi.com/?i=${imdbID}&apikey=2259e0f1`
    );
    console.log(response.data);
    yield put({ type: M.FETCH_MOVIE_SUCCESS, payload: response.data });
  } catch (err) {
    yield put({ type: M.FETCH_MOVIE_FAILURE });
  }
}

export default function* movieSaga() {
  yield takeEvery(M.FETCH_MOVIES_REQUESTED, fetchMovies);
  yield takeEvery(M.FETCH_MOVIE_REQUESTED, fetchMovie);
}
