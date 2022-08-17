import Search from "antd/lib/input/Search";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { fetchMovies } from "../../actions/movieActions";

const SearchBar = () => {
  const [searchedMovie, setSearchedMovie] = useState("");

  const dispatch = useDispatch();

  const onSubmit = (e) => {
    e.preventDefault();
    // console.log(e);
    // whenUserPressEnter(searchedMovie);
    dispatch(fetchMovies({ searchedMovie }));
  };

  return (
    <div className="search-bar">
      <Search
        placeholder="Enter Movie"
        onPressEnter={onSubmit}
        enterButton
        type="text"
        value={searchedMovie}
        onChange={(e) => setSearchedMovie(e.target.value)}
      />
    </div>
  );
};

export default SearchBar;
