import React from "react";

class UserComponent extends React.Component {
  constructor() {
    super();
  }

  render() {
    console.log("component", this.props.data);
    return (
      <div className="simple-user">
        <div className="top-description">
          <img src={this.props.data.avatar_url} alt="Profile picture" />
          <div className="user-short-info">
            <h3>
              {this.props.data.name} <span>@{this.props.data.login}</span>
            </h3>
            <p>{this.props.data.bio}</p>
          </div>
        </div>
        <div className="bottom-description">
          <h4>{this.props.data.location}</h4>
          <h4>Followers: {this.props.data.followers}</h4>
        </div>
      </div>
    );
  }
}

export default UserComponent;
