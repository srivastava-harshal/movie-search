import React from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchMovie } from "../../actions/movieActions";
import { useParams } from "react-router-dom";
import SelectedMovieInfo from "../../components/SelectedMovieInfo/SelectedMovieInfo";

const SelectedMovie = () => {
  const dispatch = useDispatch();

  const params = useParams();
  console.log(params);

  useEffect(() => {
    dispatch(fetchMovie({ imdbID: params.id }));
  });

  return (
    <div>
      <SelectedMovieInfo />
    </div>
  );
};

export default SelectedMovie;
