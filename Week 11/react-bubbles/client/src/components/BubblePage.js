import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { getColors } from "../actions/actions";
import Bubbles from "./Bubbles";
import ColorList from "./ColorList";

const BubblePage = props => {
  console.log("props", props);
  return (
    <>
      {props.getColors()}
      <ColorList history={props.history} />
      <Bubbles />
    </>
  );
};

export default connect(
  null,
  { getColors }
)(BubblePage);
