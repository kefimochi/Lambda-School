import axios from "axios";
import { axiosWithAuth } from "../axios/axiosWithAuth";

export const INITIAL_FETCH_START = "INITIAL_FETCH_START";
export const INITIAL_FETCH_SUCCESS = "INITIAL_FETCH_SUCCESS";
export const INITIAL_FETCH_FAIL = "INITIAL_FETCH_FAIL";

export const FRIENDS_FETCH_START = "FRIENDS_FETCH_START";
export const FRIENDS_FETCH_SUCCESS = "FRIENDS_FETCH_SUCCESS";
export const FRIENDS_FETCH_FAIL = "FRIENDS_FETCH_FAIL";

export const CREATE_FRIEND_START = "CREATE_FRIEND_START";
export const CREATE_FRIEND_SUCCESS = "CREATE_FRIEND_SUCCESS";
export const CREATE_FRIEND_FAIL = "CREATE_FRIEND_FAIL";

export const getInitialData = (props, history) => dispatch => {
  dispatch({ type: INITIAL_FETCH_START });
  axiosWithAuth()
    .post("http://localhost:5000/api/login", props)
    .then(res => {
      console.log("RESPONSE", res.data);
      localStorage.setItem("token", res.data.payload);
      history.push("/friends");
      dispatch({ type: INITIAL_FETCH_SUCCESS, payload: res.data });
    })
    .catch(err => dispatch({ type: INITIAL_FETCH_FAIL, payload: err }));
};

export const createFriend = props => dispatch => {
  dispatch({ type: CREATE_FRIEND_START });
  axiosWithAuth()
    .post("http://localhost:5000/api/friends", {
      ...props,
      id: Date.now()
    })
    .then(res => {
      console.log("create res", res.data);
      dispatch({ type: CREATE_FRIEND_SUCCESS, payload: res.data });
    })
    .catch(err => dispatch({ type: CREATE_FRIEND_FAIL, payload: err }));
};

export const getFriends = () => dispatch => {
  dispatch({ type: FRIENDS_FETCH_START });
  axiosWithAuth()
    .get("http://localhost:5000/api/friends")
    .then(res => {
      console.log("get res", res.data);
      dispatch({ type: FRIENDS_FETCH_SUCCESS, payload: res.data });
    })
    .catch(err => dispatch({ type: FRIENDS_FETCH_FAIL, payload: err }));
};
