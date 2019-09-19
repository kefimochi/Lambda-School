import React, { Component } from "react";
import { NavLink, Link } from "react-router-dom";
import axios from "axios";

const put = (id, movie) => {
  axios
    .put(`http://localhost:5000/api/movies/${id}`, movie)
    .then(response => {
      alert("Successfully changed");
      console.log("successful put", response);
    })
    .catch(err => {
      console.log(err);
    });
};

const UpdateMovie = props => {
  console.log("PROPS EDIT", props);
  const id = props.match.params.id;
  return (
    <div>
      <form
        onSubmit={e => {
          e.preventDefault();

          let newMovie = {
            id: id,
            title: document.getElementById("title").value,
            director: document.getElementById("director").value,
            metascore: document.getElementById("score").value,
            stars: document.getElementById("stars").value.split(",")
          };
          console.log("new movie", newMovie);
          put(id, newMovie);
          return props.history.push(`/`);
        }}
      >
        <input
          type="text"
          required
          name="title"
          id="title"
          placeholder="Movie's Title"
        />
        <input
          type="text"
          required
          name="director"
          id="director"
          placeholder="Movie's Director"
        />
        <input
          required
          type="text"
          name="score"
          id="score"
          placeholder="Movie's metascore"
        />
        <input
          required
          type="text"
          name="stars"
          id="stars"
          placeholder="Movie's stars, enter seperated with a comma"
        />
        <button type="submit">Submit</button>
      </form>
      <br />
    </div>
  );
};

export default UpdateMovie;
