import {
  FETCH_QUOTE_FAIL,
  FETCH_QUOTE_START,
  FETCH_QUOTE_SUCCESS
} from "../actions/actions";

const initialState = {
  quote: {
    _id: 1234567890,
    content:
      "Together we can change the world, just one random act of kindness at a time.",
    author: "Ron Hal"
  },
  error: "",
  isFetching: false
};

function reducer(state = initialState, action) {
  console.log(state);
  switch (action.type) {
    case FETCH_QUOTE_START:
      return {
        ...state,
        isFetching: true,
        error: ""
      };
    case FETCH_QUOTE_SUCCESS:
      return {
        ...state,
        quote: { ...action.payload },
        isFetching: false,
        error: ""
      };
    case FETCH_QUOTE_FAIL:
      return {
        ...state,
        error: action.payload
      };
    default:
      return state;
  }
}

export default reducer;
