import React from "react";
import { connect } from "react-redux";
import { getFriends } from "../actions/actions";
import { Link } from "react-router-dom";

const FriendsList = props => {
  return (
    <div>
      <h4>Here's a list of friends</h4>
      <Link to="/">
        <button>To login</button>
      </Link>

      <Link to="/create">
        <button>To friends form</button>
      </Link>

      <br />
      <br />

      <button
        onClick={() => {
          props.getFriends();
        }}
      >
        Click to get friends
      </button>

      {props.friends.length > 0 ? (
        mapOverFriends(props.friends)
      ) : (
        <h5>Loading...</h5>
      )}
    </div>
  );
};

const mapOverFriends = friends => {
  return friends.map(friend => {
    return (
      <div>
        <h5>{friend.name}</h5>
        <h6>
          Age: {friend.age}, email: {friend.email}
        </h6>
      </div>
    );
  });
};

const mapStateToProps = state => {
  return {
    friends: state.friends
  };
};

export default connect(
  mapStateToProps,
  { getFriends }
)(FriendsList);
