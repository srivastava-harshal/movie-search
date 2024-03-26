import { Divider } from "antd";
import React from "react";
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";
import { LeftCircleOutlined } from "@ant-design/icons";

const SelectedMovieInfo = (props) => {
  const navigate = useNavigate();

  return (
    <div className="outer-container">
      <div className="container">
        {/* <button className="back-button" onClick={() => navigate("/")}> */}
        <LeftCircleOutlined
          className="back-button"
          onClick={() => navigate("/")}
          style={{ fontSize: "30px", color: "rgb(255,255,255,.7)" }}
        />
        {/* Back
        </button> */}
        <div className="header">
          <div className="header-top">
            <div className="header-top-title">
              <h1>{props.movie.Title}</h1>
            </div>
            <div className="year-type-duration">
              <div>Year: {props.movie.Year}</div>
              <div>{props.movie.Type}</div>
              <div>{props.movie.Runtime}</div>
            </div>
          </div>
          <div className="header-bottom">
            <div className="rating">
              <h3>IMDb RATING</h3>
              <p>
                <span className="rating-rate">{props.movie.imdbRating}</span>/10
              </p>
            </div>
            <div className="genre">
              <h3>GENRE</h3>
              <p>{props.movie.Genre}</p>
            </div>
          </div>
        </div>
        <Divider
          style={{ backgroundColor: "white", margin: "10px 0 20px 0" }}
        />
        <div className="poster">
          <img src={props.movie.Poster} />
        </div>
        <Divider style={{ backgroundColor: "white" }} />
        <div className="content">{props.movie.Plot}</div>
        <Divider style={{ backgroundColor: "white" }} />
        <div className="info">
          <div>Director: {props.movie.Director}</div>
          <div>Writer: {props.movie.Writer}</div>
          <div>Stars: {props.movie.Actors}</div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return { movie: state.movie };
};

export default connect(mapStateToProps)(SelectedMovieInfo);
