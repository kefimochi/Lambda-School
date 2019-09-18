import {
  INITIAL_FETCH_FAIL,
  INITIAL_FETCH_START,
  INITIAL_FETCH_SUCCESS
} from "../actions/actions";

const initialState = {
  friends: [],
  error: "",
  isFetching: false
};

function reducer(state = initialState, action) {
  console.log("State", state);
  switch (action.type) {
    case INITIAL_FETCH_START:
      return {
        ...state,
        isFetching: true,
        error: ""
      };
    case INITIAL_FETCH_SUCCESS:
      return {
        ...state,
        friends: [...state.friends, ...action.payload],
        isFetching: false,
        error: ""
      };
    case INITIAL_FETCH_FAIL:
      return {
        ...state,
        error: action.payload
      };
    // case CREATE_SMURFS_START:
    //   return {
    //     ...state,
    //     isFetching: true,
    //     error: ""
    //   };
    // case CREATE_SMURFS_SUCCESS:
    //   return {
    //     ...state,
    //     smurfs: [...action.payload],
    //     isFetching: false,
    //     error: ""
    //   };
    // case CREATE_SMURFS_FAIL:
    //   console.log("Post failed");
    //   return {
    //     ...state,
    //     error: action.payload
    //   };
    default:
      return state;
  }
}

export default reducer;
