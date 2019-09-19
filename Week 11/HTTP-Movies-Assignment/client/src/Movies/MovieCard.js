import React from "react";
import axios from "axios";

const MovieCard = props => {
  console.log("card", props.prop);
  const { title, director, metascore, stars } = props.movie;
  return (
    <div className="movie-card">
      <button
        onClick={() => {
          axios
            .delete(`http://localhost:5000/api/movies/${props.movie.id}`)
            .then(response => {
              alert("Successfully deleted");
            })
            .catch(err => {
              console.log(err);
            });
          return props.prop.history.push("/");
        }}
      >
        Delete
      </button>
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
    </div>
  );
};

export default MovieCard;
