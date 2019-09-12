import React from "react";
import { addFeatureToCar } from "../actions/actions";
import { connect } from "react-redux";

const AdditionalFeature = props => {
  return (
    <li>
      {/* Add an onClick that will let you add a feature to your car */}
      <button
        className="button"
        onClick={() => {
          props.addFeatureToCar(props.feature);
        }}
      >
        Add
      </button>
      {props.feature.name} (+{props.feature.price})
    </li>
  );
};

export default connect(
  null,
  { addFeatureToCar }
)(AdditionalFeature);
