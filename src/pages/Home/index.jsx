import React from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchMovies } from "../../actions/movieActions";
import MovieList from "../../components/MovieList";
import SearchBar from "../../components/SearchBar";

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchMovies());
  }, []);

  const onSearchSubmit = (text) => {
    return text;
  };

  return (
    <div>
      <SearchBar whenUserPressEnter={onSearchSubmit} />
      <br />
      <MovieList />
    </div>
  );
};

export default Home;
