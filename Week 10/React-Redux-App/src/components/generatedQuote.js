import React from "react";
import { connect } from "react-redux";
import { getQuote } from "../actions/actions";
import quoteIcon from "../images/quotation.svg";

const GeneratedQuote = props => {
  if (props.quote.content.length > 270) {
    props.getQuote();
  }
  return props.error.length > 0 ? (
    <div className="top">
      <h2>Error Occurred! Text: {props.error}</h2>
    </div>
  ) : (
    <div className="top">
      <div className="top-container">
        <img src={quoteIcon} alt="A quote icon" />
        <h3>{props.quote.content}</h3>
      </div>
      <h3 className="author">©{props.quote.author}</h3>
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
)(GeneratedQuote);
