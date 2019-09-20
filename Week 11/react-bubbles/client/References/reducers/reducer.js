import {
  INITIAL_FETCH_FAIL,
  INITIAL_FETCH_START,
  INITIAL_FETCH_SUCCESS,
  CREATE_FRIEND_FAIL,
  CREATE_FRIEND_START,
  CREATE_FRIEND_SUCCESS,
  FRIENDS_FETCH_FAIL,
  FRIENDS_FETCH_START,
  FRIENDS_FETCH_SUCCESS
} from "../actions/actions";

const initialState = {
  friends: [],
  error: "",
  isFetching: false
};

function reducer(state = initialState, action) {
  console.log("State", state);
  switch (action.type) {
    case FRIENDS_FETCH_START:
      return {
        ...state,
        isFetching: true,
        error: ""
      };
    case FRIENDS_FETCH_SUCCESS:
      return {
        ...state,
        friends: [...action.payload],
        isFetching: false,
        error: ""
      };
    case FRIENDS_FETCH_FAIL:
      return {
        ...state,
        error: action.payload
      };
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
    case CREATE_FRIEND_START:
      return {
        ...state,
        isFetching: true,
        error: ""
      };
    case CREATE_FRIEND_SUCCESS:
      return {
        ...state,
        friends: [...action.payload],
        isFetching: false,
        error: ""
      };
    case CREATE_FRIEND_FAIL:
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
