import React from "react";
import "../index.css";

class PlayerCard extends React.Component {
  constructor() {
    super();
  }

  render() {
    console.log("data", this.props.data);
    return (
      <div className="player">
        <h2>{this.props.data.name}</h2>
        <div className="bottom">
          <h5>Country: {this.props.data.country}</h5>
          <h5>Searches: {this.props.data.searches}</h5>
        </div>
      </div>
    );
  }
}

export default PlayerCard;
