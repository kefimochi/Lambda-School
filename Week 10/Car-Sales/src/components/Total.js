import React from "react";
import { connect } from "react-redux";

const Total = props => {
  console.log("props", props);
  return (
    <div className="content">
      <h4>Total Amount: ${props.additionalPrice + props.originalPrice}</h4>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    additionalPrice: state.additionalPrice,
    originalPrice: state.car.price
  };
};

export default connect(
  mapStateToProps,
  {}
)(Total);
