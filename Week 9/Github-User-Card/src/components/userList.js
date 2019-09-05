import React from "react";
import UserComponent from "./userComponent";
import "../styles/index.css";
import axios from "axios";
import "../styles/all-users-container.css";

class UserList extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="cards">
        {this.props.data ? (
          this.props.data.map(user => {
            return <UserComponent data={user} />;
          })
        ) : (
          <h3>You completed all todos!</h3>
        )}
      </div>
    );
  }
}

export default UserList;
