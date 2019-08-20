import React from "react";
import { Link, Route } from "react-router-dom";

const SavedList = props => (
  <div className="saved-list">
    <h3>Saved Movies:</h3>
    {props.list.map(movie => (
      <span className="saved-movie">{movie.title}</span>
    ))}
    <Link to={`/`} className="home-button">
      Home
    </Link>
  </div>
);

export default SavedList;
