import React from "react";
import { connect } from "react-redux";
import { createSmurf } from "../actions/actions";
const SmurfForm = props => {
  return (
    <div>
      <h1>Imagine a form is here</h1>
      <form
        onSubmit={e => {
          e.preventDefault();
          return props.createSmurf({
            name: document.getElementById("name").value,
            age: document.getElementById("age").value,
            height: document.getElementById("height").value
          });
        }}
      >
        <input
          type="text"
          required
          name="name"
          id="name"
          placeholder="Smurf's name"
        />
        <input
          type="text"
          required
          name="age"
          id="age"
          placeholder="Smurf's age"
        />
        <input
          required
          type="text"
          name="height"
          id="height"
          placeholder="Smurf's height in cm"
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default connect(
  null,
  { createSmurf }
)(SmurfForm);
