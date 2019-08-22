import React from "react";
import "./App.css";
import { useState, useEffect } from "react";

const Form = props => {
  const [user, setUser] = useState({ name: "", email: "", role: "" });
  let userCount = 0;
  const handleChange = event => {
    setUser({ ...user, [event.target.name]: event.target.value });
  };

  const handleSubmit = event => {
    event.preventDefault();
    props.setUsersArray([...props.usersArray, user]);
    console.log("users array", props.usersArray);
    console.log(user.name);
    console.log(user.email);
    console.log(user.role);
  };

  return (
    <div className="App">
      <form onSubmit={event => handleSubmit(event)}>
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={user.name}
            onChange={event => handleChange(event)}
          />
        </label>
        <label>
          Email:
          <input
            type="text"
            name="email"
            value={user.email}
            onChange={event => handleChange(event)}
          />
        </label>
        <label>
          Role:
          <input
            type="text"
            name="role"
            value={user.role}
            onChange={event => handleChange(event)}
          />
        </label>
        <button>Submit!</button>
      </form>
    </div>
  );
};

export default Form;
