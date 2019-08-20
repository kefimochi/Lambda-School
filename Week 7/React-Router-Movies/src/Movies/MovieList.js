import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, Route } from "react-router-dom";

const MovieList = props => {
  console.log("pops", props);
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    const getMovies = () => {
      axios
        .get("http://localhost:5000/api/movies")
        .then(response => {
          setMovies(response.data);
          console.log("Response:", response.data);
        })
        .catch(error => {
          console.error("Server Error", error);
        });
    };

    getMovies();
  }, []);

  return (
    <div className="movie-list">
      {movies.map(movie => (
        <Route
          path="/"
          render={props => (
            <MovieDetails {...props} key={movie.id} movie={movie} />
          )}
        />
      ))}
    </div>
  );
};

function MovieDetails({ movie }) {
  const { title, director, metascore, stars } = movie;
  console.log("ID", movie.id);
  return (
    <div className="movie-card">
      <Link to={`/movies/${movie.key}`}>
        <h2>{title}</h2>
        <div className="movie-director">
          Director: <em>{director}</em>
        </div>
        <div className="movie-metascore">
          Metascore: <strong>{metascore}</strong>
        </div>
        <h3>Actors</h3>

        {stars.map(star => (
          <div key={star} className="movie-star">
            {star}
          </div>
        ))}
      </Link>
    </div>
  );
}

export default MovieList;
