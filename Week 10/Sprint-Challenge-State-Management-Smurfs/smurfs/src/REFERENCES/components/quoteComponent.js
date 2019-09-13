import React from "react";
import { connect } from "react-redux";
import { getQuote } from "../actions/actions";
import redoIcon from "../images/redo-solid.svg";

import GeneratedQuote from "./generatedQuote";

const QuoteComponent = props => {
  return (
    <div className="card">
      <GeneratedQuote />

      <div className="bottom">
        <div className="buttonRound" onClick={() => props.getQuote()}>
          <img src={redoIcon} alt="A redo icon" />
        </div>
      </div>
    </div>
  );
};

export default connect(
  null,
  { getQuote }
)(QuoteComponent);
