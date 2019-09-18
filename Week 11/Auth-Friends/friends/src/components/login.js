import React, { useState } from "react";
import { connect } from "react-redux";
import { getInitialData } from "../actions/actions";
import { Link } from "react-router-dom";

const Login = props => {
  const [credentials, setCredentials] = useState({});

  const login = e => {
    e.preventDefault();
    props.getInitialData(credentials, props.history);
  };

  const handleChange = e => {
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div>
      <form onSubmit={login}>
        <input
          type="text"
          name="username"
          value={credentials.username}
          onChange={handleChange}
        />
        <input
          type="password"
          name="password"
          value={credentials.password}
          onChange={handleChange}
        />
        <button>Log in</button>
      </form>
      <Link to="/create">
        <button>To friends form</button>
      </Link>

      <Link to="/friends">
        <button>To friends list</button>
      </Link>
    </div>
  );
};

export default connect(
  null,
  { getInitialData }
)(Login);
