import React from "react";
import { connect } from "react-redux";
import { getQuote } from "../actions/actions";
import iconSVG from "../images/redo-solid.svg";

const QuoteComponent = props => {
  console.log("Props", props.quote);
  return (
    <div className="card">
      <div className="top"></div>
      <div className="bottom">
        <div className="button" onClick={() => props.getQuote()}>
          <img src={iconSVG} alt="A redo icon" />
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    quote: state.quote,
    error: state.error
  };
};

export default connect(
  mapStateToProps,
  { getQuote }
)(QuoteComponent);
