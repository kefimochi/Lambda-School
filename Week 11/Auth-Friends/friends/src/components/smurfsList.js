import React from "react";
import { connect } from "react-redux";
import { getSmurfs } from "../actions/actions";
const SmurfsList = props => {
  return (
    <div>
      <h3>Here's smurfs list:</h3>
      <button onClick={() => props.getSmurfs()}>Get</button>
      {props.smurfs.map(smurf => {
        return (
          <div id="list">
            <h3>{smurf.name}</h3>
            <p>
              Age: {smurf.age}, height: {smurf.height}
            </p>
          </div>
        );
      })}
    </div>
  );
};

const mapStateToProps = state => {
  return {
    smurfs: state.smurfs
  };
};

export default connect(
  mapStateToProps,
  { getSmurfs }
)(SmurfsList);
