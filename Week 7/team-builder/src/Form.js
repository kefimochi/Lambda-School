import React from "react";
import "./App.css";
import { useState, useEffect } from "react";
import { Route } from "react-router-dom";

const Form = props => {
  const handleChange = event => {
    props.setUser({ ...props.user, [event.target.name]: event.target.value });
  };

  const handleSubmit = event => {
    event.preventDefault();
    console.log(props.user.name);
    console.log(props.user.password);
  };

  return (
    <div className="App">
      {console.log(props.user)}
      <form onSubmit={event => handleSubmit(event)}>
        <label>
          Full:
          <input
            type="text"
            name="username"
            value={props.user.username}
            onChange={event => handleChange(event)}
          />
        </label>
        <label>
          Password:
          <input
            type="text"
            name="password"
            value={props.user.password}
            onChange={event => handleChange(event)}
          />
        </label>
        <button>Submit!</button>
      </form>
    </div>
  );
};

export default Form;
