import { axiosWithAuth } from "../axios/axiosWithAuth";

export const INITIAL_FETCH_START = "INITIAL_FETCH_START";
export const INITIAL_FETCH_SUCCESS = "INITIAL_FETCH_SUCCESS";
export const INITIAL_FETCH_FAIL = "INITIAL_FETCH_FAIL";

export const COLORS_FETCH_START = "COLORS_FETCH_START";
export const COLORS_FETCH_SUCCESS = "COLORS_FETCH_SUCCESS";
export const COLORS_FETCH_FAIL = "COLORS_FETCH_FAIL";

export const CREATE_COLORS_START = "CREATE_COLORS_START";
export const CREATE_COLORS_SUCCESS = "CREATE_COLORS_SUCCESS";
export const CREATE_COLORS_FAIL = "CREATE_COLORS_FAIL";

export const DELETE_COLOR_START = "DELETE_COLOR_START";
export const DELETE_COLOR_SUCCESS = "DELETE_COLOR_SUCCESS";
export const DELETE_COLOR_FAIL = "DELETE_COLOR_FAIL";

export const EDIT_COLOR_START = "EDIT_COLOR_START";
export const EDIT_COLOR_SUCCESS = "EDIT_COLOR_SUCCESS";
export const EDIT_COLOR_FAIL = "EDIT_COLOR_FAIL";

export const getInitialData = (props, history) => dispatch => {
  dispatch({ type: INITIAL_FETCH_START });
  axiosWithAuth()
    .post("http://localhost:5000/api/login", props)
    .then(res => {
      localStorage.setItem("token", res.data.payload);
      history.push("/bubbles");
      dispatch({ type: INITIAL_FETCH_SUCCESS, payload: res.data });
    })
    .catch(err => dispatch({ type: INITIAL_FETCH_FAIL, payload: err }));
};

export const createColors = props => dispatch => {
  dispatch({ type: CREATE_COLORS_START });
  axiosWithAuth()
    .post("http://localhost:5000/api/colors", props)
    .then(res => {
      dispatch({ type: CREATE_COLORS_SUCCESS, payload: res.data });
    })
    .catch(err => dispatch({ type: CREATE_COLORS_FAIL, payload: err }));
};

export const getColors = () => dispatch => {
  console.log("got here to get");
  dispatch({ type: COLORS_FETCH_START });
  axiosWithAuth()
    .get("http://localhost:5000/api/colors")
    .then(res => {
      dispatch({ type: COLORS_FETCH_SUCCESS, payload: res.data });
    })
    .catch(err => dispatch({ type: COLORS_FETCH_FAIL, payload: err }));
};

export const saveEdit = (id, color) => dispatch => {
  dispatch({ type: EDIT_COLOR_START });
  axiosWithAuth()
    .put(`http://localhost:5000/api/colors/${id}`, color)
    .then(res => {
      getColors();
    })
    .catch(err => dispatch({ type: EDIT_COLOR_FAIL, payload: err }));
};

export const deleteColor = id => dispatch => {
  console.log("delete id", id);
  dispatch({ type: DELETE_COLOR_START });
  axiosWithAuth()
    .delete(`http://localhost:5000/api/colors/${id}`)
    .then(console.log("u piece of shit"))
    .catch(err => dispatch({ type: DELETE_COLOR_FAIL, payload: err }));
};
