import axios from "axios";
import AxiosWithAuth from "../axios/axiosWithAuth";

export const INITIAL_FETCH_START = "INITIAL_FETCH_START";
export const INITIAL_FETCH_SUCCESS = "INITIAL_FETCH_SUCCESS";
export const INITIAL_FETCH_FAIL = "INITIAL_FETCH_FAIL";

// export const CREATE_SMURFS_START = "CREATE_SMURFS_START";
// export const CREATE_SMURFS_SUCCESS = "CREATE_SMURFS_SUCCESS";
// export const CREATE_SMURFS_FAIL = "CREATE_SMURFS_FAIL";

export const getSmurfs = () => dispatch => {
  dispatch({ type: INITIAL_FETCH_START });
  axios
    .get("http://localhost:5000")
    .then(res => {
      console.log("RESPONSE", res.data);
      dispatch({ type: INITIAL_FETCH_SUCCESS, payload: res.data });
    })
    .catch(err => dispatch({ type: INITIAL_FETCH_FAIL, payload: err }));
};

// export const createSmurf = props => dispatch => {
//   console.log("YOU GOT TO THE CREATION ACTION", props);
//   dispatch({ type: CREATE_SMURFS_START });
//   axios
//     .post("http://localhost:5000", {
//       name: props.name,
//       age: props.age,
//       height: props.height,
//       id: Date.now()
//     })
//     .then(res => {
//       console.log("RESPONSE", res.data);
//       dispatch({ type: CREATE_SMURFS_SUCCESS, payload: res.data });
//     })
//     .catch(err => dispatch({ type: CREATE_SMURFS_FAIL, payload: err }));
// };
