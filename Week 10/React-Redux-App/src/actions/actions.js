export const ADD_FEATURE = "ADD_FEATURE";
export const REMOVE_FEATURE = "REMOVE_FEATURE";

export function addFeatureToCar(feature) {
  return {
    type: ADD_FEATURE,
    feature: feature
  };
}

export function deleteFeature(feature) {
  return {
    type: REMOVE_FEATURE,
    feature: feature
  };
}

import axios from "axios";

export const FETCH_QUOTE_START = "FETCH_QUOTE_START";
export const FETCH_QUOTE_SUCCESS = "FETCH_QUOTE_SUCCESS";
export const FETCH_QUOTE_FAIL = "FETCH_QUOTE_FAIL";

export const getQuote = () => dispatch => {
  dispatch({ type: FETCH_QUOTE_START });
  axios
    .get("https://api.quotable.io/random")
    .then(res => {
      console.log("RESPONDSE", res);
      dispatch({ type: FETCH_QUOTE_SUCCESS, payload: res.data.results });
    })
    .catch(err => dispatch({ type: FETCH_QUOTE_FAIL, payload: err }));
};
