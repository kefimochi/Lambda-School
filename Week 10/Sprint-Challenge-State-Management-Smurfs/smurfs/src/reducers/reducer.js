import {
  FETCH_SMURFS_FAIL,
  FETCH_SMURFS_START,
  FETCH_SMURFS_SUCCESS,
  CREATE_SMURFS_FAIL,
  CREATE_SMURFS_START,
  CREATE_SMURFS_SUCCESS
} from "../actions/actions";

const initialState = {
  smurfs: [],
  error: "",
  isFetching: false
};

function reducer(state = initialState, action) {
  console.log("State", state);
  switch (action.type) {
    case FETCH_SMURFS_START:
      return {
        ...state,
        isFetching: true,
        error: ""
      };
    case FETCH_SMURFS_SUCCESS:
      return {
        ...state,
        smurfs: [...state.smurfs, ...action.payload],
        isFetching: false,
        error: ""
      };
    case FETCH_SMURFS_FAIL:
      return {
        ...state,
        error: action.payload
      };
    case CREATE_SMURFS_START:
      return {
        ...state,
        isFetching: true,
        error: ""
      };
    case CREATE_SMURFS_SUCCESS:
      return {
        ...state,
        smurfs: [...action.payload],
        isFetching: false,
        error: ""
      };
    case CREATE_SMURFS_FAIL:
      console.log("Post failed");
      return {
        ...state,
        error: action.payload
      };
    default:
      return state;
  }
}

export default reducer;
