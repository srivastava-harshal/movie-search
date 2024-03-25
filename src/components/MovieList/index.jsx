import { Card } from "antd";
import Meta from "antd/lib/card/Meta";
import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

const MovieList = (props) => {
  return (
    <div className="movie-list">
      {props.movies.map((movie) => {
        return (
          <Link to={movie.imdbID} key={movie.imdbID}>
            <Card
              hoverable
              style={{ width: window.innerWidth > 768 ? 250 : 200 }}
              cover={
                <img
                  alt="movie-cover"
                  src={
                    movie.Poster !== "N/A"
                      ? movie.Poster
                      : "https://media.sproutsocial.com/uploads/2017/02/10x-featured-social-media-image-size.png"
                  }
                  style={{ height: "auto", objectFit: "cover" }}
                  // onClick={() => handleMovieSelect(movie.imdbID)}
                />
              }
            >
              <Meta title={movie.Title} description={movie.Year} />
            </Card>
          </Link>
        );
      })}
    </div>
  );
};

const mapStateToProps = (state) => {
  return { movies: state.movies };
};

export default connect(mapStateToProps)(MovieList);
