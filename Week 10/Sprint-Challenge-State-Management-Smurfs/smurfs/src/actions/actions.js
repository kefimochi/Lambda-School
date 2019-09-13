import axios from "axios";

export const FETCH_SMURFS_START = "FETCH_SMURFS_START";
export const FETCH_SMURFS_SUCCESS = "FETCH_SMURFS_SUCCESS";
export const FETCH_SMURFS_FAIL = "FETCH_SMURFS_FAIL";

export const CREATE_SMURFS_START = "CREATE_SMURFS_START";
export const CREATE_SMURFS_SUCCESS = "CREATE_SMURFS_SUCCESS";
export const CREATE_SMURFS_FAIL = "CREATE_SMURFS_FAIL";

export const getSmurfs = () => dispatch => {
  dispatch({ type: FETCH_SMURFS_START });
  axios
    .get("http://localhost:3333/smurfs")
    .then(res => {
      console.log("RESPONSE", res.data);
      dispatch({ type: FETCH_SMURFS_SUCCESS, payload: res.data });
    })
    .catch(err => dispatch({ type: FETCH_SMURFS_FAIL, payload: err }));
};

export const createSmurf = props => dispatch => {
  console.log("YOU GOT TO THE CREATION ACTION", props);
  dispatch({ type: CREATE_SMURFS_START });
  axios
    .post("http://localhost:3333/smurfs", {
      name: props.name,
      age: props.age,
      height: props.height,
      id: Date.now()
    })
    .then(res => {
      console.log("RESPONSE", res.data);
      dispatch({ type: CREATE_SMURFS_SUCCESS, payload: res.data });
    })
    .catch(err => dispatch({ type: CREATE_SMURFS_FAIL, payload: err }));
};
