import React from "react";

class PlayerCard extends React.Component {
  constructor() {
    super();
  }

  render() {
    console.log("data", this.props.data);
    return (
      <div className="player">
        <h3>{this.props.data.name}</h3>
        <div className="bottom">
          <h5>{this.props.data.country}</h5>
          <h5>{this.props.data.searches}</h5>
        </div>
      </div>
    );
  }
}

export default PlayerCard;
