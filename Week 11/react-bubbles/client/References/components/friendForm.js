import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { createFriend } from "../actions/actions";

const FriendForm = props => {
  return (
    <div>
      <h4>Add a friend!</h4>
      <form
        onSubmit={e => {
          e.preventDefault();
          alert("Friend successfully added!");
          return props.createFriend({
            name: document.getElementById("name").value,
            age: document.getElementById("age").value,
            email: document.getElementById("email").value
          });
        }}
      >
        <input
          type="text"
          required
          name="name"
          id="name"
          placeholder="Friend's name"
        />
        <input
          type="text"
          required
          name="age"
          id="age"
          placeholder="Friend's age"
        />
        <input
          required
          type="text"
          name="email"
          id="email"
          placeholder="Friend's email"
        />
        <button type="submit">Submit</button>
      </form>
      <br />
      <Link to="/">
        <button>To login</button>
      </Link>

      <Link to="/friends">
        <button>To friends list</button>
      </Link>
    </div>
  );
};

export default connect(
  null,
  {
    createFriend
  }
)(FriendForm);
